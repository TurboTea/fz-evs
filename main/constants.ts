import { join, resolve } from 'path'
import { PrismaClient } from '@prisma/client'
const { app } = require('electron')
export const isDev = require('electron-is-dev')

export const dbPath = isDev ? join(resolve('./prisma/dev.db')) : join(app.getPath('userData'), 'database.db')
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
})
// 通过main进程发送事件给renderer进程，提示更新信息
export function sendUpdateMessage(text: any, mainWindow: any) {
  mainWindow.webContents.send('message', text)
}
