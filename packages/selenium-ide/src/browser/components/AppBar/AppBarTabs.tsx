import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useEffect, useState } from "react";
import { PROJECT_TAB, SUITES_TAB, TESTS_TAB } from "../../enums/tab";
import { SIDEMainProps } from "../types";

/**********顶部菜单栏tab*************/
function a11yProps(index: number) {
  return {
    "aria-controls": `tabpanel-${index}`,
    id: `tab-${index}`
  };
}


const AppBarTabs: React.FC<Pick<SIDEMainProps, "setTab" | "tab">> = ({
                                                                       setTab,
                                                                       tab
                                                                     }) => {
  const [languageMap, setLanguageMap] = useState<any>({
    mainMenu: { tests: "Tests", suites: "Suites", config: "Config" }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });

  }, []);

  return <Tabs
    aria-label="Selenium IDE workflows"
    className="not-draggable"
    indicatorColor="secondary"
    onChange={(_e, v) => setTab(v)}
    textColor="inherit"
    value={tab}
  >
    <Tab label={languageMap.mainMenu.tests} {...a11yProps(TESTS_TAB)} />
    <Tab label={languageMap.mainMenu.suites} {...a11yProps(SUITES_TAB)} />
    <Tab label={languageMap.mainMenu.config} {...a11yProps(PROJECT_TAB)} />
  </Tabs>;
};

export default AppBarTabs;
