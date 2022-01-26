import { ipcMain } from 'electron'
import { PrismaClient, Company } from '@prisma/client'
const prisma = new PrismaClient()
const test = async () => {
  const allUsers: Company[] = await prisma.company.findMany()
  console.log(allUsers)
}
test()
ipcMain.on('user:save', async (e, v) => {})
