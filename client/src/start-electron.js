const electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow;

const path = require('path'),
    isDev = require('electron-is-dev');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({width: 960, height: 640})
    const appUrl = isDev ? 'http://localhost:3000' :
        `file://${path.join(__dirname, '../build/index.html')}`
    mainWindow.loadURL(appUrl)
    // mainWindow.maximize()
    // mainWindow.setFullScreen(true)
    mainWindow.on('closed', () => mainWindow = null)
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})