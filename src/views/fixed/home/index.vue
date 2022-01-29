<template>
  <g-query-wrapper class="w-full h-full" :loading="loading" :error="error" :run="run" :data="data">
    <h1 class="font-bold underline text-[20px] text-red-100">Hello world!</h1>
  </g-query-wrapper>
</template>
<script lang="ts" setup>
import { useRequest } from 'vue-request'
const query = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 3000)
  })
}
const { data, loading, error, run } = useRequest(() => query())
</script>
