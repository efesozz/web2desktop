const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  back: () => ipcRenderer.send('go-back'),
  forward: () => ipcRenderer.send('go-forward'),
  home: () => ipcRenderer.send('go-home'),
  reload: () => ipcRenderer.send('reload-page'),
  userPanel: () => ipcRenderer.send('open-user-panel'),
  exit: () => ipcRenderer.send('exit-app'),
  minimize: () => ipcRenderer.send('minimize-app'),
  cycleFullscreen: () => ipcRenderer.send('cycle-fullscreen'),
  onFullscreenChange: (callback) =>
    ipcRenderer.on('fullscreen-state-changed', (_, state) => callback(state))
})