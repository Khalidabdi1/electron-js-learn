import { app,BrowserWindow } from "electron";

// is app ready ?
app.whenReady().then(()=>{ 

let window =new BrowserWindow({
    frame:false,
    transparent:true
})

window.loadFile("index.html")

})