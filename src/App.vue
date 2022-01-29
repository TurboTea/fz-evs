<template>
  <!--  <g-app-update />-->
  <el-config-provider :locale="elLocale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import { useLocale } from '@shared/hooks/useLocale'
import { useLayout } from '@shared/store/modules/layout'
// import { Company } from '@prisma/client'
// import {join, resolve} from "path";
// import {app} from "@electron/remote";
// const { PrismaClient } = require("@prisma/client");
const { elLocale } = useLocale(useLayout)

// window.electron.ipcRenderer.on('companyList:get', (e, companyList) => {
//   console.log(JSON.parse(companyList))
// })
// window.electron.ipcRenderer.send('find:companyList')

// const isDevelopment = process.env.NODE_ENV !== "production";
// console.log(isDevelopment);
//
// const dbPath = isDevelopment
//     ? join(resolve("./prisma/dev.db"))
//     : join(app.getPath("userData"), "database.db");
// console.log("llega", dbPath);
// console.log("llega", app);
//
// export const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: `file:${dbPath}`,
//     },
//   },
// });
</script>
<style></style>
