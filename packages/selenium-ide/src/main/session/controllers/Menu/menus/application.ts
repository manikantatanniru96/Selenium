import { MenuComponent, Session } from 'main/types'
import { commands as editBasicsCommands } from './editBasics'
import { commands as projectEditorCommands } from './projectEditor'
import { commands as testEditorCommands } from './testEditor'
import { commands as projectViewCommands } from './projectView'
import { platform } from 'os'
import { commands as helpMenuCommands } from './help'
import { menuFactoryFromCommandFactory } from '../utils'

export const commands: MenuComponent = (session: Session) => () =>
  [
    {
      label: 'Selenium IDE',
      submenu: [
        {
          label: session.store.get('languageMap').electronMenuTree.about,
          role: 'about',
        },
        { type: 'separator' },
        {
          label: session.store.get('languageMap').electronMenuTree.services,
          role: 'services',
        },
        { type: 'separator' },
        {
          label: session.store.get('languageMap').electronMenuTree.hideElectron,
          role: 'hide',
        },
        {
          label: session.store.get('languageMap').electronMenuTree.hideOthers,
          role: 'hideOthers',
        },
        {
          label: session.store.get('languageMap').electronMenuTree.showAll,
          role: 'unhide',
        },
        { type: 'separator' },
        {
          accelerator: platform() === 'win32' ? 'Alt+F4' : 'CommandOrControl+Q',
          label: session.store.get('languageMap').electronMenuTree.quit,
          click: async () => {
            await session.system.quit()
          },
        },
      ],
    },
    {
      label: session.store.get('languageMap').windowTab.file,
      submenu: projectEditorCommands(session)(),
    },
    {
      label: session.store.get('languageMap').windowTab.edit,
      submenu: [
        ...editBasicsCommands(session)(),
        ...testEditorCommands(session)(),
      ],
    },
    {
      label: session.store.get('languageMap').windowTab.view,
      submenu: projectViewCommands(session)(),
    },
    {
      label: session.store.get('languageMap').windowTab.help,
      submenu: helpMenuCommands(session)(),
    },
  ]

export default menuFactoryFromCommandFactory(commands)
