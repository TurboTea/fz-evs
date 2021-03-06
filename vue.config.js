//asar extract app.asar ./.
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const resolve = dir => path.join(__dirname, dir)
const sign = process.argv[4] ?? 'dev'
const webpackBundleAnalyzer = false
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const AutoImport = require('unplugin-auto-import/webpack')
const { EnvironmentPlugin, ProvidePlugin } = require('webpack')
const { snakeCase, toUpper } = require('lodash')
const glob = require('glob')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin')
console.log('sign:::', sign)
const isProduction = process.env.NODE_ENV === 'production'
console.log(isProduction)
const appConfig = require(`./config/${sign}.config.js`)
const services = require('./scripts/services.json')
// 生产环境配置
const chainProd = config => {
  config.store.set('devtool', '')
  config.plugin('loadshReplace').use(new LodashModuleReplacementPlugin())
  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
    .use('image-webpack-loader')
    .loader('image-webpack-loader')
    .options({
      bypassOnDebug: true,
    })
    .end()
    .use('url-loader')
    .loader('file-loader')
    .options({
      name: 'assets/[name].[hash:8].[ext]',
    })
    .end()
  config.module
    .rule('svg')
    .test(/\.(svg)(\?.*)?$/)
    .use('file-loader')
    .loader('file-loader')
    .options({
      name: 'assets/[name].[hash:8].[ext]',
    })
}

module.exports = {
  publicPath: isProduction ? './' : './',
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        extraResources: ['prisma/**/*', 'node_modules/.prisma/**/*', 'node_modules/@prisma/client/**/*'],
      },
      externals: ['@prisma/client'],
      nodeIntegration: true,
    },
  },
  lintOnSave: false,
  filenameHashing: true,
  productionSourceMap: !isProduction,
  chainWebpack: config => {
    config.merge({
      externals: {
        sqlite3: 'commonjs sqlite3',
      },
    })
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          refSugar: true,
        }
      })
    webpackBundleAnalyzer &&
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@shared', resolve('src/shared'))
      .set('@account', resolve('src/pages/account'))
      .set('@lookup', resolve('src/pages/lookup'))
      .set('@admin', resolve('src/pages/admin'))
      //解决警告You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
      .set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
    config.plugins.delete('named-chunks')
    config.store.set('devtool', 'eval-source-map')
    // 让其他svg loader不对src/assets/icons进行操作
    config.module.rule('svg').exclude.add(resolve('src/assets/icons/svg')).end()
    // 使用svg-sprite-loader对src/assets/icons/svg下的svg进行操作
    config.module
      .rule('icon')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      // 定义规则 <svg class="icon"><use xlink:href="#icon-svg文件名"></use></svg>
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
    isProduction && chainProd(config)
  },
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single', // enable "runtime" chunk
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              try {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

                return `vendor.${packageName.replace('@', '')}`
              } catch (e) {
                return 'vendor'
              }
            },
            chunks: 'all',
          },
          env: {
            test: /envVariables/,
            chunks: 'all',
          },
        },
      },
    },
    performance: {
      hints: false,
    },
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
        dirs: [
          //<g-xx/>
          'src/shared/components',
          //<lo-xx/>
          'src/pages/lookup/components',
          //<ac-xx/>
          'src/pages/admin/components',
          //<ad-xx/>
          'src/pages/account/components',
        ],
        dts: true,
        directoryAsNamespace: true,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core', 'pinia'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: 'readonly', // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
      /* publicPath => PUBLIC_PATH*/
      new EnvironmentPlugin(
        Object.keys(appConfig).reduce((pre, cur) => {
          pre[toUpper(snakeCase(cur))] = appConfig[cur]
          return pre
        }, {}),
      ),
      new ProvidePlugin({}),
      new WebpackShellPluginNext({
        onBuildStart: {
          scripts: ['echo "Webpack Start"'],
          blocking: true,
          parallel: false,
        },
        onBuildEnd: {
          scripts: ['echo "Webpack End"'],
          blocking: false,
          parallel: true,
        },
      }),
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: appConfig.serverPort,
    compress: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/admin\/?.*/, to: path.posix.join('/', 'admin/index.html') },
        { from: /./, to: path.posix.join('/', 'index.html') },
      ],
    },
    proxy: {
      // 开发环境代理配置
      '/root': {
        // target: 'http://172.22.18.152:8088',
        target: 'http://127.0.0.1:4523/mock/543586',
        changeOrigin: true,
        pathRewrite: {
          '^/root': '',
        },
      },
      ...services.reduce((pre, cur) => {
        const prefix = `/mock/${cur.name}`
        return {
          ...pre,
          [prefix]: {
            target: `http://127.0.0.1:${cur.port}`,
            changeOrigin: true,
            pathRewrite: { [`^${prefix}`]: '' },
          },
        }
      }, {}),
      '/websocket': {
        pathRewrite: {
          '^/websocket': '',
        },
        ws: true,
        changeOrigin: true,
        target: 'http://172.22.17.108:8088',
      },
    },
  },
}
