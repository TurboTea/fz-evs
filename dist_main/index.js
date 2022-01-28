'use strict'

var client = require('@prisma/client')
var path = require('path')
var electron = require('electron')
var electronUpdater = require('electron-updater')

function _interopNamespace(e) {
  if (e && e.__esModule) return e
  var n = Object.create(null)
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k)
        Object.defineProperty(
          n,
          k,
          d.get
            ? d
            : {
                enumerable: true,
                get: function () {
                  return e[k]
                },
              },
        )
      }
    })
  }
  n['default'] = e
  return Object.freeze(n)
}

var path__namespace = /*#__PURE__*/ _interopNamespace(path)

const { app: app$1 } = require('electron')
const isDev = require('electron-is-dev')
const dbPath = isDev ? path.join(path.resolve('./prisma/dev.db')) : path.join(app$1.getPath('userData'), 'database.db')
new client.PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
})
// 通过main进程发送事件给renderer进程，提示更新信息
function sendUpdateMessage(text, mainWindow) {
  mainWindow.webContents.send('message', text)
}

const prisma = new client.PrismaClient({
  datasources: {
    db: {
      url: `file:${dbPath}`,
    },
  },
})
const registerDb = win => {
  electron.ipcMain.on('find:companyList', async () => {
    const data = await prisma.company.findMany()
    console.log(':::' + data)
    win.webContents.send('companyList:get', JSON.stringify(data))
  })
}

const uploadUrl = process.env.UPDATE_HOST ?? 'http://localhost:9000' + '/public/app/'
// 检测更新，在你想要检查更新的时候执行，renderer事件触发后的操作自行编写
const UPDATE_MESSAGE_STATUS = {
  ERROR: 0,
  CHECKING: 1,
  UPDATE: 2,
  NOT_UPDATE: 3,
  SUCCESS: 4,
  DOWNLOAD: 5,
}
function updateHandle(mainWindow) {
  electronUpdater.autoUpdater.setFeedURL(uploadUrl)
  electronUpdater.autoUpdater.on('error', function (error) {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.ERROR,
        message: error,
      },
      mainWindow,
    )
  })
  electronUpdater.autoUpdater.on('checking-for-update', function () {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.CHECKING,
      },
      mainWindow,
    )
  })
  electronUpdater.autoUpdater.on('update-available', function (info) {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.UPDATE,
        message: info,
      },
      mainWindow,
    )
  })
  electronUpdater.autoUpdater.on('update-not-available', function (info) {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.NOT_UPDATE,
        message: info,
      },
      mainWindow,
    )
  })
  electronUpdater.autoUpdater.on('download-progress', function (progressObj) {
    mainWindow.webContents.send('downloadProgress', progressObj)
  })
  electronUpdater.autoUpdater.on('update-downloaded', function (...args) {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.DOWNLOAD,
        message: args,
      },
      mainWindow,
    )
  })
  electron.ipcMain.on('isUpdateNow', args => {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.SUCCESS,
        message: args,
      },
      mainWindow,
    )
    setTimeout(() => {
      electronUpdater.autoUpdater.quitAndInstall()
    }, 1000)
  })
  electron.ipcMain.on('checkForUpdate', () => {
    electronUpdater.autoUpdater.checkForUpdates()
  })
}

const { app, BrowserWindow } = require('electron')
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
      preload: path__namespace.join(__dirname, '/preload.js'),
    },
  })
  console.log(isDev)
  updateHandle(win)
  registerDb(win)
  if (isDev) {
    await win.loadURL('http://localhost:9000')
    win.webContents.openDevTools()
  } else {
    await win.loadURL(
      `file://${(
        await Promise.resolve().then(function () {
          return /*#__PURE__*/ _interopNamespace(require('path'))
        })
      ).default.join(__dirname, '../dist/index.html')}`,
    )
  }
  return win
}
app.whenReady().then(async () => {
  await createMainWindow()
})
