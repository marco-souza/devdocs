const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1240,
        height: 760,
        show: false,
    })

    // Laod page
    mainWindow.loadURL('https://devdocs.io/')
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
}

app.on('ready', createMainWindow)
