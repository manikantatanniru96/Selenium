import StopIcon from '@mui/icons-material/Stop'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import React, { FC, useEffect, useState } from "react";
import baseControlProps from './BaseProps'

const StopButton: FC = () => {
  const [languageMap, setLanguageMap] = useState<any>({
    testCore: {
      stop:"Stop"
    }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });
  }, []);

  return <Tooltip title={languageMap.testCore.stop} aria-label="stop">
    <IconButton
      {...baseControlProps}
      onClick={() => window.sideAPI.playback.stop()}
    >
      <StopIcon />
    </IconButton>
  </Tooltip>
}


export default StopButton
