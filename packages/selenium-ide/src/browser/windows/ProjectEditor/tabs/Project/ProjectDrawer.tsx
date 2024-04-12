import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ConfigSettingsGroup } from "@seleniumhq/side-api";
import React, { FC, useEffect, useState } from "react";
import Drawer from "browser/components/Drawer/Wrapper";
import { SIDEMainProps } from "browser/components/types";

type ConfigGroupFactory = (
  group: ConfigSettingsGroup
) => React.FC<{ value: ConfigSettingsGroup }>

/*************以下是我新增****************/
// const itemMap = { project: "项目配置", system: "系统配置", "outPut": "导出配置" };
/*************以上是我新增****************/

const ConfigGroup: ConfigGroupFactory =
  (group) =>
    ({ value }) => {
      const [languageMap, setLanguageMap] = useState<any>({
        configTab: { project: "Project", system: "System", outPut: "outPut" }
      });

      useEffect(() => {
        window.sideAPI.system.getLanguageMap().then(result => {
          setLanguageMap(result);
        });

      }, []);
      return <ListItemButton
        disableRipple
        id={group}
        onClick={() =>
          window.sideAPI.state.set("editor.configSettingsGroup", group)
        }
        selected={value === group}
      >
        <ListItemText>
          {languageMap.configTab[group]}
          {/*{group === "outPut" ? "导出" : group.slice(0, 1).toUpperCase().concat(group.slice(1))}*/}
        </ListItemText>
      </ListItemButton>;
    };

const ProjectConfig = ConfigGroup("project");
const SystemConfig = ConfigGroup("system");
const OutPutConfig = ConfigGroup("outPut");


const ProjectDrawer: FC<Pick<SIDEMainProps, "session">> = ({
                                                             session: {
                                                               state: {
                                                                 editor: { configSettingsGroup }
                                                               }
                                                             }
                                                           }) => {
  const [languageMap, setLanguageMap] = useState<any>({
    mainMenu: { config: "Config" }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });

  }, []);
  return <Drawer header={languageMap.mainMenu.config}>
    <List dense>
      <ProjectConfig value={configSettingsGroup} />
      <SystemConfig value={configSettingsGroup} />
      <OutPutConfig value={configSettingsGroup} />
    </List>
  </Drawer>;
};

export default ProjectDrawer;
