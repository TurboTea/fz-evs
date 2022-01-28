<template>
  <div class="fixed w-full h-full bg-[#000000]/[0.5] flex items-center justify-center z-[1000]" v-if="isUpdate">
    <div class="flex items-center justify-center flex-col bg-[#fff] rounded-[10px] px-[10px] py-[50px]">
      <div class="text-[#000] font-bold tracking-[1.5px]">正在下载应用最新版本: {{ appName }}</div>
      <el-progress type="circle" :percentage="percent" :width="200">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">当前更新进度</span>
        </template>
      </el-progress>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import isElectron from 'is-electron'

const UPDATE_MESSAGE_STATUS = {
  ERROR: 0,
  CHECKING: 1,
  UPDATE: 2,
  NOT_UPDATE: 3,
  SUCCESS: 4,
  DOWNLOAD: 5,
}
onMounted(async () => {
  console.log(isElectron())
  setTimeout(() => {
    window.ipcRenderer.send('checkForUpdate')
  }, 1500)
})
const isUpdate = ref(false)
const percent = ref(0)
const version = ref('')
const appName = ref('')
window.ipcRenderer.on('message', (event: any, text: any) => {
  const { code, message } = text
  switch (code) {
    case UPDATE_MESSAGE_STATUS.UPDATE:
      version.value = message?.version
      appName.value = message?.path
      isUpdate.value = true
      break
    case UPDATE_MESSAGE_STATUS.ERROR:
      isUpdate.value = false
      break
    case UPDATE_MESSAGE_STATUS.DOWNLOAD:
      isUpdate.value = false
      ElMessageBox.confirm(`若自动更新失败请到此路径下手动安装：${message[0]?.downloadedFile}`, '提示', {
        showCancelButton: false,
      })
        .then(() => {
          window.ipcRenderer.send('isUpdateNow')
        })
        .catch(() => {
          window.ipcRenderer.send('isUpdateNow')
        })
      break
    default:
      break
  }
})
window.ipcRenderer.on('downloadProgress', (event: any, progressObj: any) => {
  percent.value = Number((progressObj?.percent || 0).toFixed(1))
})
</script>
