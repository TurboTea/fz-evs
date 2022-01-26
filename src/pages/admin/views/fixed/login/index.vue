<template>
  <div class="mt-[49px]">
    <img class="mx-auto mb-[7px]" src="./components/logo.svg" alt="" />
    <h3 class="mb-[42px] text-white text-[18px] font-semibold leading-[25px] text-center">BAAS系统</h3>
    <el-form id="login-form" ref="loginFormRef" label-position="top" status-icon :model="authLoginForm">
      <el-form-item label="账号" prop="username" :error="v$.username.$errors.map(_ => _.$message)[0]">
        <el-input
          v-model="authLoginForm.username"
          type="text"
          placeholder="用户名或手机号"
          autocomplete="off"
          @blur="v$.username.$touch"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :error="v$.password.$errors.map(_ => _.$message)[0]">
        <el-input
          v-model="authLoginForm.password"
          type="password"
          show-password
          placeholder="请输入密码"
          autocomplete="off"
          @blur="v$.password.$touch"
        ></el-input>
      </el-form-item>
      <el-form-item ref="verCodeRef" label="验证码" prop="verCode" :error="v$.verCode.$errors.map(_ => _.$message)[0]">
        <div class="w-full h-full flex items-start gap-4">
          <el-input
            v-model="authLoginForm.verCode"
            type="text"
            placeholder="请输入右侧图片内的验证码"
            @keyup.enter="handleSubmitForm"
          />
          <div>
            <img class="vercode-image" :src="captchaUrl" alt="验证码" />
            <el-button class="vercode-toggle text-[#FFFFFF]/[0.65]" type="text" @click="toggleKaptchaImg"
              >看不清，换一张</el-button
            >
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmitForm" class="w-full submit-button">登录</el-button>
      </el-form-item>
      <el-form-item>
        <router-link class="text-[#FFFFFF]/[0.65]" to="/retrieve">忘记密码？</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
const authLoginForm = reactive({})
const captchaUrl = ref(`${process.env.API_PREFIX}/api/kaptcha/kaptcha`)
const rules: any = {
  username: { required: helpers.withMessage('用户名不能为空', required) },
  password: { required: helpers.withMessage('密码不能为空', required) },
  verCode: { required: helpers.withMessage('验证码不能为空', required) },
}
const v$: any = useVuelidate(rules, authLoginForm)
const handleSubmitForm = () => {}
const toggleKaptchaImg = () => {}
</script>

<style lang="scss" scoped>
#login-form {
  .el-button--text {
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.65);
  }
}
</style>
