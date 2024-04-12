import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from "react";
import { SIDEMainProps } from '../types'

const {
  projects: { update },
} = window.sideAPI

const URLBar: React.FC<Pick<SIDEMainProps, 'session'>> = ({ session }) => {
  const [languageMap, setLanguageMap] = useState<any>({
    playback: {
      url:"URL"
    }
  });
  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });
  }, []);
  return (
    <>
      <Box className="flex flex-col flex-initial ps-4" justifyContent="center">
        <Typography>{languageMap.playback.url}</Typography>
      </Box>
      <Box className="flex-1 px-3 py-2">
        <TextField
          className="width-100"
          inputProps={{
            ['data-url']: true,
          }}
          onChange={(e: any) => {
            update({
              url: e.target.value,
            })
          }}
          margin="none"
          size="small"
          value={session.project.url}
        />
      </Box>
    </>
  )
}

export default URLBar
