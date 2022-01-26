import { PrismaClient } from '@prisma/client'
import { dbPath } from '@/constants'
// const shell = require('shelljs')
// const migrateDb = (): Promise<void> => {
//   const command = [
//     'npx prisma migrate deploy',
//   ].join(' ')
//   return new Promise((resolve, reject) => {
//     shell.exec(command, (code, stdout, stderr) => {
//       if (code !== 0) {
//         reject(stderr || stdout || 'non-zero exit code')
//       }
//       resolve()
//     });
//   })
// }
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
})
// void migrateDb()
