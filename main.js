const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 1200, height: 700, resizable: true, frame:false, icon: "Assets/Uink_icon.png"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'window.html'),
        protocol: 'file:',
        slashes: true
    }));
});