import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { SuiteShape } from '@seleniumhq/side-model'
import React, { FC, useEffect, useState } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

export interface SuiteEditorProps {
  suite: SuiteShape
}

export interface MiniSuiteShape {
  id: string
  name: string
}

const SuiteEditor: FC<SuiteEditorProps> = ({ suite }) => {
  const [languageMap, setLanguageMap] = useState<any>({
    suitesTab: {
      name: 'Name',
      timeout: 'Timeout',
      parallel: 'Parallel',
      persistSession: 'Persist Session',
    },
  })

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then((result) => {
      setLanguageMap(result)
    })
  }, [])
  return (
    <Stack className="p-4 width-100" spacing={1}>
      <FormControl>
        <TextField
          label={languageMap.suitesTab.name}
          name="name"
          onChange={(e: any) => {
            window.sideAPI.suites.update(suite.id, { name: e.target.value })
          }}
          size="small"
          // value={suite.name}
          defaultValue={suite.name}
        />
      </FormControl>
      <FormControl>
        <TextField
          label={languageMap.suitesTab.timeout}
          name="timeout"
          onChange={(e: any) => {
            window.sideAPI.suites.update(suite.id, {
              timeout: Math.max(parseInt(e.target.value || '0'), 0),
            })
          }}
          size="small"
          value={suite.timeout}
        />
      </FormControl>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(_e, checked) => {
                window.sideAPI.suites.update(suite.id, {
                  parallel: checked,
                })
              }}
              checked={suite.parallel}
            />
          }
          label={languageMap.suitesTab.parallel}
        />
      </FormControl>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(_e, checked) => {
                window.sideAPI.suites.update(suite.id, {
                  persistSession: checked,
                })
              }}
              checked={suite.persistSession}
            />
          }
          label={languageMap.suitesTab.persistSession}
        />
      </FormControl>
    </Stack>
  )
}

export default SuiteEditor
