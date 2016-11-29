//stars the main process which reuires electron
const electron = require('electron');
const { app, BrowserWindow } = electron;

//sets the scope of the mainWindow variable which is of type browserWindow
let mainWindow;

//creates the main browser window and sets its parameters
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });
    
    //sets the title of the app
    mainWindow.setTitle('AceChat');
    //loads the URL which has the web app
    mainWindow.loadURL('http://nathalietate.xyz/projects/acechat/client/');
    
    //closes the app and the window
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});