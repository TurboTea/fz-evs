import { autoUpdater } from 'electron-updater'
import { ipcMain } from 'electron'
import { sendUpdateMessage } from './constants'

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

function updateHandle(mainWindow: any) {
  autoUpdater.setFeedURL(uploadUrl)
  autoUpdater.on('error', function (error: any) {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.ERROR,
        message: error,
      },
      mainWindow,
    )
  })
  autoUpdater.on('checking-for-update', function () {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.CHECKING,
      },
      mainWindow,
    )
  })
  autoUpdater.on('update-available', function (info: any) {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.UPDATE,
        message: info,
      },
      mainWindow,
    )
  })
  autoUpdater.on('update-not-available', function (info: any) {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.NOT_UPDATE,
        message: info,
      },
      mainWindow,
    )
  })

  autoUpdater.on('download-progress', function (progressObj: any) {
    mainWindow.webContents.send('downloadProgress', progressObj)
  })
  autoUpdater.on('update-downloaded', function (...args: any) {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.DOWNLOAD,
        message: args,
      },
      mainWindow,
    )
  })
  ipcMain.on('isUpdateNow', (args: any) => {
    sendUpdateMessage(
      {
        code: UPDATE_MESSAGE_STATUS.SUCCESS,
        message: args,
      },
      mainWindow,
    )
    setTimeout(() => {
      autoUpdater.quitAndInstall()
    }, 1000)
  })

  ipcMain.on('checkForUpdate', () => {
    autoUpdater.checkForUpdates()
  })
}

export default updateHandle
