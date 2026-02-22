const { app, BrowserWindow, BrowserView, ipcMain } = require('electron')
const path = require('path')

let mainWindow
let view
let fullscreenState = 0 
// 0 = normal
// 1 = maximize
// 2 = gerçek fullscreen

const HOME_URL = "https://adaletgys.com"
const USER_PANEL_URL = "https://www.adaletgys.com/giris-yap"

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    frame: false,
    icon: path.join(__dirname, 'assets/icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  })

  mainWindow.loadFile('index.html')

  view = new BrowserView()
  mainWindow.setBrowserView(view)

  const navbarHeight = 45

  function resizeView() {
    const bounds = mainWindow.getBounds()
    view.setBounds({
      x: 0,
      y: navbarHeight,
      width: bounds.width,
      height: bounds.height - navbarHeight
    })
  }

  resizeView()
  mainWindow.on('resize', resizeView)

  view.webContents.loadURL(HOME_URL)
}

app.whenReady().then(createWindow)

/* NAVIGATION */

ipcMain.on('go-back', () => {
  if (view.webContents.canGoBack()) view.webContents.goBack()
})

ipcMain.on('go-forward', () => {
  if (view.webContents.canGoForward()) view.webContents.goForward()
})

ipcMain.on('go-home', () => {
  view.webContents.loadURL(HOME_URL)
})

ipcMain.on('reload-page', () => {
  view.webContents.reload()
})

ipcMain.on('open-user-panel', () => {
  view.webContents.loadURL(USER_PANEL_URL)
})

/* WINDOW CONTROLS */

ipcMain.on('exit-app', () => {
  app.quit()
})

ipcMain.on('minimize-app', () => {
  mainWindow.minimize()
})

ipcMain.on('cycle-fullscreen', () => {

  if (fullscreenState === 0) {
    mainWindow.maximize()
    fullscreenState = 1
  } 
  else if (fullscreenState === 1) {
    mainWindow.setFullScreen(true)
    fullscreenState = 2
  } 
  else {
    mainWindow.setFullScreen(false)
    mainWindow.unmaximize()
    fullscreenState = 0
  }

  // Renderer’a state gönder
  mainWindow.webContents.send('fullscreen-state-changed', fullscreenState)
})