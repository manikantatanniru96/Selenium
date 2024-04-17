import List from '@mui/material/List'
import Tooltip from '@mui/material/Tooltip'
import React, { FC, useContext, useEffect, useState } from 'react'
import Drawer from 'browser/components/Drawer/Wrapper'
import RenamableListItem from 'browser/components/Drawer/RenamableListItem'
import { context as activeTestContext } from 'browser/contexts/active-test'
import { context } from 'browser/contexts/suites'
import SuitesToolbar from './Toolbar'

const {
  state: { setActiveSuite: setSelected },
  suites: { update },
} = window.sideAPI

const rename = (id: string, name: string) => update(id, { name })

const SuitesDrawer: FC = () => {
  const {activeSuiteID} = useContext(activeTestContext)
  const suites = useContext(context)
  const [languageMap, setLanguageMap] = useState<any>({
    suitesTab: {
      tooltip:
        'double click to modify the name,right click to export or delete suites',
    },
  })

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then((result) => {
      setLanguageMap(result)
    })
  }, [])
  return (
    <Drawer>
      <SuitesToolbar />
      <List className='flex-col flex-1 overflow-y' dense>
        {suites
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ id, name }) => (
            <Tooltip title={languageMap.suitesTab.tooltip}>
              <RenamableListItem
                id={id}
                key={id}
                name={name}
                onContextMenu={() => {
                  window.sideAPI.menus.open('suiteManager', [id])
                }}
                rename={rename}
                selected={id === activeSuiteID}
                setSelected={setSelected}
              />
            </Tooltip>
          ))}
      </List>
    </Drawer>
  )
}

export default SuitesDrawer
