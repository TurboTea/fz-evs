<template>
  <div class="flex flex-row justify-center items-center h-screen w-screen">
    <img src="./components/401.svg" class="w-[120px]" />
    <div class="ml-12">
      <p class="mb-6 text-gray-700 text-4xl">抱歉 , 你没有权限 !</p>
      <el-button type="info" class="px-12" @click="back">返回</el-button>
    </div>
  </div>
</template>
<script setup>
let { proxy } = getCurrentInstance()
const back = function () {
  proxy.$router.back()
}
</script>
