import { join, resolve } from 'path'
const { app } = require('@electron/remote/main')

export const isDev = process.env.NODE_ENV !== 'production'
export const dbPath = isDev ? join(resolve('./prisma/dev.db')) : join(app.getPath('userData'), 'database.db')
console.log(dbPath)
