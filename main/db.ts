import { PrismaClient } from '@prisma/client'
import { dbPath } from './constants'
import { BrowserWindow, ipcMain } from 'electron'
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
})
export const registerDb = (win: BrowserWindow) => {
  ipcMain.on('find:companyList', async () => {
    const data = await prisma.company.findMany()
    console.log(':::' + data)
    win.webContents.send('companyList:get', JSON.stringify(data))
  })
}
