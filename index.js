const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setTitle('AceChat');
    mainWindow.loadURL('http://nathalietate.xyz/projects/acechat/client/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});