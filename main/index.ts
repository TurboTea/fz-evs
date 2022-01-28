import { registerDb } from './db'

const { app, BrowserWindow } = require('electron')
import * as path from 'path'
import updateHandle from './auto-update'
import { isDev } from './constants'
async function createMainWindow() {
  const win = new BrowserWindow({
    center: true,
    title: 'evs',
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      sandbox: true,
      contextIsolation: true,
      webSecurity: true,
      enableRemoteModule: true,
      nodeIntegrationInWorker: true,
      preload: path.join(__dirname, '/preload.js'),
    },
  })
  console.log(isDev)
  updateHandle(win)
  registerDb(win)
  if (isDev) {
    await win.loadURL('http://localhost:9000')
    win.webContents.openDevTools()
  } else {
    await win.loadURL(`file://${(await import('path')).default.join(__dirname, '../dist/index.html')}`)
  }
  return win
}

app.whenReady().then(async () => {
  await createMainWindow()
})
