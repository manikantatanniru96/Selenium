import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import React, { FC, useContext, useEffect, useState } from 'react'
import { badIndex } from '@seleniumhq/side-api/dist/constants/badIndex'
import baseControlProps from './BaseProps'
import { context as playbackCurrentIndexContext } from 'browser/contexts/playback-current-index'
import { context as activeTestContext } from 'browser/contexts/active-test'

const PlayButton: FC = () => {
  const { activeTestID } = useContext(activeTestContext)
  const currentIndex = useContext(playbackCurrentIndexContext)
  const [languageMap, setLanguageMap] = useState<any>({
    testCore: {
      play: 'Play',
    },
  })

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then((result) => {
      setLanguageMap(result)
    })
  }, [])
  return (
    <Tooltip title={languageMap.testCore.play} aria-label="play">
      <IconButton
        {...baseControlProps}
        data-play
        onClick={() => {
          currentIndex === badIndex
            ? window.sideAPI.playback.play(activeTestID)
            : window.sideAPI.playback.resume()
        }}
      >
        <PlayArrowIcon />
      </IconButton>
    </Tooltip>
  )
}

export default PlayButton
