<template>
  <g-app-update />
  <el-config-provider :locale="elLocale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import { useLocale } from '@shared/hooks/useLocale'
import { useLayout } from '@shared/store/modules/layout'
import { prisma } from '@/db'
const { elLocale } = useLocale(useLayout)

prisma.company.findMany().then(_ => {
  console.log(_)
})
</script>
<style></style>
