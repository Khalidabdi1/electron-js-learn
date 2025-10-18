import { app, BrowserWindow, ipcMain } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
app.whenReady().then(() => {
  win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs")
    }
  });
  console.log(VITE_DEV_SERVER_URL);
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
});
ipcMain.on("test", () => {
  console.log("yes");
});
ipcMain.on("create-file", (event, fileName, content) => {
  const filepath = path.join(app.getPath("desktop"), fileName);
  fs.writeFile(filepath, content, (err) => {
    if (err) {
      console.log("can't create file");
      event.reply("create-file-response", "error with. create file");
    } else {
      console.log("file create it");
      event.reply("create-file-response", "file create it");
    }
  });
});
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
