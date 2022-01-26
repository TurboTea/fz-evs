<template>
  <div id="login-page" class="h-screen bg-gradient-to-l from-[#545571] to-[#0E0927]">
    <div class="flex justify-between ml-[103px] mr-[254px] p-[91px]">
      <div class="text-white font-semibold">
        <h1 class="text-[60px] leading-[84px] tracking-[1px]">Hello！</h1>
        <p class="text-[22px] leading-[30px] mt-[5px]">欢迎来到BAAS管理控制台~~</p>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
:deep(.el-form-item) {
  margin-bottom: 16px;
}
:deep(.el-form-item__label) {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  padding-bottom: 4px;
  line-height: 20px;
}
:deep(.el-form-item__content) {
  width: 400px;
  border: none;
  .el-input__inner {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.85);
    background: #5e5e75;
    border-radius: 4px;
    border: none;
  }
}

:deep(.submit-button) {
  background: linear-gradient(205deg, #3661e8 0%, #1993cc 100%);
  border: none;
  border-radius: 4px;
  font-weight: 400;
  color: #ffffff;
}
</style>
