"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  test: () => electron.ipcRenderer.send("test"),
  CreateFile: (fileName, content) => electron.ipcRenderer.send("create-file", fileName, content),
  fileResponse: (callBack) => electron.ipcRenderer.on("create-file-response", (_event, massage) => callBack(massage))
  // You can expose other APTs you need here.
  // ...
});
