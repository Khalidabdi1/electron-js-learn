"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  test: () => electron.ipcRenderer.send("test")
  // You can expose other APTs you need here.
  // ...
});
