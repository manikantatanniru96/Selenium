import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import React, { FC, useEffect, useState } from "react";
import baseControlProps from "./BaseProps";

const PauseButton: FC = () => {
  const [languageMap, setLanguageMap] = useState<any>({
    testCore: {
      pause: "Pause"
    }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });
  }, []);
  return <Tooltip title={languageMap.testCore.pause} aria-label="pause">
    <IconButton
      {...baseControlProps}
      data-pause
      onClick={() => window.sideAPI.playback.pause()}
    >
      <PauseIcon />
    </IconButton>
  </Tooltip>;
};

export default PauseButton;
