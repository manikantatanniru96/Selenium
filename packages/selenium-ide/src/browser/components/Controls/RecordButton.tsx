import RecordIcon from '@mui/icons-material/FiberManualRecord'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import React, { FC, useEffect, useState } from "react";
import baseControlProps from './BaseProps'

const RecordButton: FC = () => {
  const [languageMap, setLanguageMap] = useState<any>({
    testCore: {
      record:"Record"
    }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });
  }, []);
  return <Tooltip title={languageMap.testCore.record} aria-label="record">
    <IconButton
      {...baseControlProps}
      data-record
      onClick={() => window.sideAPI.recorder.start()}
    >
      <RecordIcon color="error" />
    </IconButton>
  </Tooltip>
}

export default RecordButton
