import { BrowserWindow } from 'electron'
import { MenuComponent } from 'main/types'
import { platform } from 'os'
import { menuFactoryFromCommandFactory, multipleCommand } from '../utils'

export const commands: MenuComponent = (session) => () =>
  [
    ...multipleCommand(
      platform() === 'win32'
        ? ['CommandOrControl+Shift+I', 'CommandOrControl+F12', 'F12']
        : ['CommandOrControl+Option+I', 'CommandOrControl+F12'],
      {
        click: async () => {
          await session.state.get()
          const window = BrowserWindow.getFocusedWindow()
          window?.webContents.openDevTools()
        },
        label: session.store.get('languageMap').viewMenuTree.showDevTools,
      }
    ),
    {
      accelerator: 'CommandOrControl+P',
      click: async () => {
        await session.windows.initializePlaybackWindow()
      },
      label: session.store.get('languageMap').viewMenuTree.resetPlaybackWindows,
    },
  ]

export default menuFactoryFromCommandFactory(commands)
