<!--todo setup改造-->
<template>
  <el-button class="verificode-btn" :disabled="isDisabled" @click="handleClick">
    {{ btnText }}
  </el-button>
</template>

<script>
export default {
  name: 'VerifiCodeBtn',
  props: {
    countdown: {
      type: Number,
      default: 60,
    },
    text: {
      type: String,
      default: '获取验证码',
    },
    getVerifyCode: {
      type: Function,
      default: undefined,
    },
  },
  data() {
    return {
      isDisabled: false,
      btnText: this.text,
      seconds: this.countdown,
      intervalId: undefined,
    }
  },
  beforeUnmount() {
    // 离开页面清除定时器
    this.intervalId && clearInterval(this.intervalId)
  },
  methods: {
    async handleClick() {
      const { countdown, text } = this
      // 按钮禁用
      this.isDisabled = true
      try {
        const { getVerifyCode } = this
        if (getVerifyCode) {
          await getVerifyCode()
        }
      } catch (error) {
        // console.log(error)
        this.isDisabled = false
        return
      }
      this.btnText = countdown.toString()
      // 启动定时器
      this.intervalId = setInterval(() => {
        this.seconds--
        if (this.seconds === 0) {
          this.seconds = countdown
          this.btnText = text
          this.isDisabled = false
          // 清除定时器
          this.intervalId && clearInterval(this.intervalId)
        } else {
          this.btnText = this.seconds.toString()
        }
      }, 1000)
    },
  },
}
</script>

<style scoped lang="scss">
.verificode-btn {
  width: 90px;
  height: 40px;
  padding: 0 9px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.45);
  background: #5e5e75;
  &:focus {
    outline: transparent;
  }
}
</style>
