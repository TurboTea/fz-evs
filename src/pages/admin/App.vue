<template>
  <!--  <g-app-update />-->
  <el-config-provider :locale="elLocale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import { useLocale } from '@shared/hooks/useLocale'
import { useLayout } from '@shared/store/modules/layout'
import { Company } from '@prisma/client'
const { elLocale } = useLocale(useLayout)

window.ipcRenderer.on('companyList:get', (e, companyList) => {
  console.log(JSON.parse(companyList))
})
window.ipcRenderer.send('find:companyList')
</script>
<style></style>
