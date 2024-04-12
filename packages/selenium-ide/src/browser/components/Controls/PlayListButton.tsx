import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { StateShape } from '@seleniumhq/side-api'
import React, { FC, useEffect, useState } from "react";
import baseControlProps from './BaseProps'

export interface PlayListButtonProps {
  state: StateShape
}

const PlayListButton: FC<PlayListButtonProps> = () => {
  const [languageMap, setLanguageMap] = useState<any>({
    suitesTab: {
      playSuite:"Play Suite"
    }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });
  }, []);
  return <Tooltip title={languageMap.suitesTab.playSuite} aria-label="play-suite">
    <IconButton
      {...baseControlProps}
      data-play-suite
      onClick={() => window.sideAPI.playback.playSuite()}
    >
      <PlaylistPlayIcon />
    </IconButton>
  </Tooltip>
}

export default PlayListButton
