//asar extract app.asar ./.
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const resolve = dir => path.join(__dirname, dir)
const sign = process.argv[4] ?? 'dev'
const webpackBundleAnalyzer = false
const productionGzipExtensions = ['js', 'css']
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const AutoImport = require('unplugin-auto-import/webpack')
const { EnvironmentPlugin, ProvidePlugin } = require('webpack')
const { snakeCase, toUpper } = require('lodash')
const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const glob = require('glob')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')
console.log('sign:::', sign)
const isProduction = process.env.NODE_ENV === 'production'
const appConfig = require(`./config/${sign}.config.js`)
const services = require('./scripts/services.json')
const pages = {}
// 配置pages多页面获取当前文件夹下的html和js
glob.sync('./src/pages/*/*.ts').forEach(filepath => {
  const fileList = filepath.split('/')
  const fileName = fileList[fileList.length - 2]
  const chunkName = fileName === 'admin' ? 'index' : fileName
  pages[chunkName] = {
    entry: `src/pages/${fileName}/main.ts`,
    // 模板来源
    template: `src/pages/${fileName}/index.html`,
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', chunkName],
  }
})
// 生产环境配置
const chainProd = config => {
  config.store.set('devtool', '')
  config.plugin('extract-css').use(MiniCssExtractPlugin)
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
  config.plugins.push(
    new CompressionWebpackPlugin({
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 8192,
      minRatio: 0.8,
    }),
  )
}

module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      externals: ['@prisma/client'],
      extraResources: ['prisma/**/*', 'node_modules/.prisma/**/*', 'node_modules/@prisma/client/**/*'],
      chainWebpackRendererProcess: config => {
        config.plugin('define').tap(args => {
          return args
        })
      },
      nodeIntegration: true,
      customFileProtocol: './',
      // electron 构建配置
      builderOptions: {
        productName: '方正进销存系统', // 项目名，也是生成的安装文件名
        appId: 'fz-evs.com', // 包名
        copyright: 'Copyright © 2022 fz', // 版权
        nsis: {
          perMachine: false,
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: './build/icons/icon.ico', // 安装图标
          uninstallerIcon: './build/icons/icon.ico', // 卸载图标
          installerHeaderIcon: './build/icons/icon.ico', // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: '方正进销存系统', // 图标名称
        },
        publish: [
          {
            provider: 'generic',
            url: 'https://zimeitizizhu.com/public/app/',
          },
        ],
        dmg: {
          // macOSdmg
          contents: [
            {
              x: 410,
              y: 150,
              type: 'link',
              path: '/Applications',
            },
            {
              x: 130,
              y: 150,
              type: 'file',
            },
          ],
        },
        mac: {
          // mac
          icon: './build/icons/icon.icns',
          artifactName: '${productName}-v${version}-mac.${ext}',
        },
        win: {
          // win 相关配置
          artifactName: 'fz-v${version}-setup.${ext}',
          target: [
            {
              target: 'nsis', // 利用nsis制作安装程序
              arch: [
                // 这个意思是打出来32 bit + 64 bit的包，但是要注意：这样打包出来的安装包体积比较大，所以建议直接打32的安装包。
                'x64',
                'ia32',
              ],
            },
          ],
        },
        linux: {
          icon: './build/icons',
          artifactName: '${productName}-v${version}-linux.${ext}',
        },
      },
    },
  },
  lintOnSave: false,
  filenameHashing: true,
  productionSourceMap: !isProduction,
  transpileDependencies: true,
  pages,
  chainWebpack: config => {
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
      new NodePolyfillPlugin(),
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
})
