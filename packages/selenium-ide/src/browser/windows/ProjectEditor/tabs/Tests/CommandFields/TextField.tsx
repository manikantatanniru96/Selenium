import FormControl from '@mui/material/FormControl'
import HelpCenter from '@mui/icons-material/HelpCenter'
import TextField from 'browser/components/UncontrolledTextField'
import startCase from 'lodash/fp/startCase'
import React, { FC, useEffect, useState } from 'react'
import { CommandFieldProps } from '../types'
import { updateField } from './utils'
import Tooltip from '@mui/material/Tooltip'
import { LocatorFields } from '@seleniumhq/side-api'
import { Commands } from '@seleniumhq/side-model'

const CommandTextField: FC<CommandFieldProps> = ({
  command,
  commands,
  disabled,
  fieldName,
  note,
  testID,
}) => {
  const FieldName = startCase(fieldName)
  const updateText = updateField(fieldName)
  const [languageMap, setLanguageMap] = useState<any>({
    testCore: {
      comment: 'Comment',
      target: 'Target',
      value: 'Value',
    },
    commandMap: Commands,
  })
  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then((result) => {
      setLanguageMap(result)
    })
  }, [])
  // 处理label标签
  const handleLabel = (value: string) => {
    switch (value) {
      case 'Comment':
        return languageMap.testCore.comment
      case 'Target':
        return languageMap.testCore.target
      case 'Value':
        return languageMap.testCore.value
      default:
        return value
    }
  }
  // 一定会使用languageMap.commandMap,其实是为了兼容参数commands
  const targetCommandMap = languageMap.commandMap
    ? languageMap.commandMap
    : commands
  const fullNote =
    (note ||
      targetCommandMap[command.command][fieldName as LocatorFields]
        ?.description) ??
    ''
  const label = fullNote
    ? handleLabel(FieldName) + ' - ' + fullNote
    : handleLabel(FieldName)

  return (
    <FormControl className="flex flex-row">
      <TextField
        className="flex-1"
        disabled={disabled}
        id={`${fieldName}-${command.id}`}
        label={label}
        InputLabelProps={{
          sx: {
            textOverflow: 'ellipsis',
          },
        }}
        name={fieldName}
        onChange={updateText(testID, command.id)}
        onContextMenu={() => {
          window.sideAPI.menus.open('textField')
        }}
        size="small"
        value={command[fieldName as LocatorFields]}
      />
      {fullNote && (
        <Tooltip className="mx-2 my-auto" title={fullNote} placement="top-end">
          <HelpCenter />
        </Tooltip>
      )}
    </FormControl>
  )
}

export default CommandTextField
