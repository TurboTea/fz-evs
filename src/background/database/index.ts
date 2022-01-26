import { ipcMain } from 'electron'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()
const test = async () => {
  const allUsers: User[] = await prisma.user.findMany()
  console.log(allUsers)
}
test()
ipcMain.on('user:save', async (e, v) => {})
