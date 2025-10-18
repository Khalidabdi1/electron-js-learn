import { ipcRenderer, contextBridge } from 'electron'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('electronAPI', {
 test:()=>ipcRenderer.send("test"),
 CreateFile:(fileName:string,content:string)=>ipcRenderer.send("create-file",fileName,content),
 fileResponse:(callBack:(massage:string)=>void)=>ipcRenderer.on("create-file-response",(_event,massage)=>callBack(massage))

  // You can expose other APTs you need here.
  // ...

  
})
