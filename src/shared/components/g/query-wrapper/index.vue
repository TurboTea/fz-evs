<template>
  <div>
    <slot v-if="!loading && !error && !hasError" />
    <div v-if="loading">数据获取中...</div>
    <template v-if="!loading">
      <div v-if="error">
        {{ error }}
      </div>
      <div v-if="hasError">
        {{ data.message }}
      </div>
      <div v-if="error || hasError">
        <el-button v-if="hasTokenInvalid" @click="handleLogout">重新登录</el-button>
        <el-button v-else @click="run()">重新请求</el-button>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  error: {
    required: false,
  },
  data: {
    type: Object as PropType<HttpResponse>,
    required: false,
  },
  run: {
    type: Function,
    required: true,
  },
})
//todo
/*const hasError = computed(() => (props.data ? props.data?.code !== GATEWAY_CODE.success : false))
const hasTokenInvalid = computed(() => (props.data ? props.data?.code === 'baas.err.auth.token.sign.invalid' : false))*/
const hasError = computed(() => false)
const hasTokenInvalid = computed(() => false)
const handleLogout = () => {}
</script>
