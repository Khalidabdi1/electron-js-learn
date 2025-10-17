import { app, BrowserWindow ,ipcMain} from 'electron'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null

 

app.whenReady().then(()=>{
   win=new BrowserWindow({
    webPreferences:{
      preload:path.join(__dirname,"preload.mjs")
    }

    

  })

  console.log(VITE_DEV_SERVER_URL)
  if(VITE_DEV_SERVER_URL){
    win.loadURL(VITE_DEV_SERVER_URL)
    // win.webContents.openDevTools()
  }else{
    win.loadFile(path.join(RENDERER_DIST,"index.html"))
  }

})


ipcMain.on("test",()=>{
 console.log("yes")
})
