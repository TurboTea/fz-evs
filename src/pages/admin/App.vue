<template>
  <g-app-update />
  <el-config-provider :locale="elLocale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import { useLocale } from '@shared/hooks/useLocale'
import { useLayout } from '@shared/store/modules/layout'
const { elLocale } = useLocale(useLayout)
</script>
<style></style>
