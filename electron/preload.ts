import { ipcRenderer, contextBridge } from 'electron'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('electronAPI', {
 test:()=>ipcRenderer.send("test")

  // You can expose other APTs you need here.
  // ...

  
})
