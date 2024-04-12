import { TestShape } from '@seleniumhq/side-model'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import React, { FC, useEffect, useState } from "react";
import AvailableSuiteTestRow from './AvailableSuiteTestRow'
import EditorToolbar from 'browser/components/Drawer/EditorToolbar'

export interface AvailableSuiteTestListProps {
  activeSuite: string
  allTests: TestShape[]
}

const AvailableSuiteTestList: FC<AvailableSuiteTestListProps> = ({
  activeSuite,
  allTests,
}) =>
{
  const [languageMap, setLanguageMap] = useState<any>({
    suitesTab: { AvailableTests:"Available tests" }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });

  }, []);
  return <Box className="flex flex-col flex-1">
    <EditorToolbar className="flex-initial py-2 z-1" elevation={1}>
      <span className="ms-4 py-2">{languageMap.suitesTab.AvailableTests}</span>
    </EditorToolbar>
    <List
      className="flex flex-col flex-1 overflow-y pt-0"
      dense
      sx={{
        borderColor: 'primary.main',
        verticalAlign: 'top',
      }}
    >
      {allTests
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((test, index) => {
          const { id } = test
          return (
            <AvailableSuiteTestRow
              activeSuite={activeSuite}
              index={index}
              key={id}
              test={test}
            />
          )
        })}
    </List>
  </Box>
}

export default AvailableSuiteTestList
