## frontend
- [Vue 3](https://v3.vuejs.org/) as the foundation
- [Tailwind CSS](https://tailwindcss.com) for styling
- [vuelidate](https://vuelidate-next.netlify.app) for validate
- [axios](https://axios-http.com) for http
- [crypto-js](https://cryptojs.gitbook.io/docs/) for crypto
- [element-plus](https://element-plus.gitee.io/zh-CN/) for component
- [pinia](https://pinia.vuejs.org/) for store
- [pinia-plugin-persistedstate](https://github.com/prazdevs/pinia-plugin-persistedstate) for persist
- [vue-request](https://www.attojs.com/) for http wrapper
- [vue-i18n](https://vue-i18n.intlify.dev/) for i18n
- [type-fest](https://github.com/sindresorhus/type-fest) for type extension
- [miragejs](https://miragejs.com/) for mock
- [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api) for api generate from yaml|json
  - [eta](https://github.com/eta-dev/eta) for template engine
- [prism](https://github.com/stoplightio/prism) for api mock from yaml|json
- [icon-font-generator](https://github.com/Workshape/icon-font-generator) for api generate font from svg
- [typescript-json-serializer](https://github.com/GillianPerard/typescript-json-serializer) for serialize and deserialize
- [lodash](https://lodash.com/) for utils extension
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) for auto import components
- [dayjs](https://dayjs.gitee.io/) for time formatter
- [vueuse](https://vueuse.org/core) for vue hook
## Directory Description
- [TREE.md](./TREE.md)
## About components
- [ac-xx](src/pages/account/components/ac)
- [ad-xx](src/pages/admin/components/ad)
- [lo-xx](src/pages/lookup/components/lo)
- [g-xx](src/shared/components/g)
## About api
- [service config](./scripts/services.json)
- generate api ``yarn api:generate --name=xx-service``
- mock api ``yarn api:mock``
  - real data mock ``yarn api:mock -d``
- [use api](./src/pages/lookup/views/fixed/api)
- ## About hooks
  - [useClipboard](https://vueuse.org/core/useclipboard)
  - [useTitle](https://vueuse.org/core/usetitle)
## About naming
  ```
  BaaS专有名词定义：
  联盟： federation
  企业： organization
  联盟链：consortium-chain
  私链： private-chain
  平行链： para-chain
  联盟链共识： tendermint
  平行链共识： para
  私链共识： raft 
  ```
## About coding

```vue
<template>
  <div id="xx-[com|page]"></div>
</template>
<script lang="ts">
export default {
  name: 'xx-xx'
}
</script>
<script lang="ts" setup>
/*var*/
/*var*/
/*api*/
/*api*/
/*func*/
/*func*/
</script>

<style lang="scss" scoped>
#xx-[com|page] {}
</style>

```
## Some skills
```vue
<template>
  <div class="hover:bg-[url('/src/../xxx.svg')]
"></div>
</template>
```
## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
