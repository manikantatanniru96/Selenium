import { MenuComponent } from 'main/types'
import { menuFactoryFromCommandFactory } from '../utils'

export const commands: MenuComponent = (session) => () =>
  [
    {
      accelerator: 'CommandOrControl+Z',
      click: () => session.api.state.undo(),
      enabled: session.state.prevHistory.length !== 0,
      label: session.store.get('languageMap').editMenuTree.undo,
    },
    {
      accelerator: 'CommandOrControl+Shift+Z',
      click: () => session.api.state.redo(),
      enabled: session.state.nextHistory.length !== 0,
      label: session.store.get('languageMap').editMenuTree.redo,
    },
    { type: 'separator' },
    { label: session.store.get('languageMap').editMenuTree.cut, role: 'cut' },
    { label: session.store.get('languageMap').editMenuTree.copy, role: 'copy' },
    {
      label: session.store.get('languageMap').editMenuTree.paste,
      role: 'paste',
    },
  ]

export default menuFactoryFromCommandFactory(commands)
