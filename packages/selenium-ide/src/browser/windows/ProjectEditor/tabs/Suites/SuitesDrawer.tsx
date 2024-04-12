import List from "@mui/material/List";
import React, { FC, useEffect, useState } from "react";
import Drawer from "browser/components/Drawer/Wrapper";
import EditorToolbar from "browser/components/Drawer/EditorToolbar";
import RenamableListItem from "browser/components/Drawer/RenamableListItem";
import SuiteCreateDialog from "./SuiteCreateDialog";
import { SIDEMainProps } from "browser/components/types";
import { Tooltip } from "@mui/material";

const {
  state: { setActiveSuite: setSelected },
  suites: { update }
} = window.sideAPI;

const rename = (id: string, name: string) => update(id, { name });

const SuitesDrawer: FC<Pick<SIDEMainProps, "session">> = ({ session }) => {
  const {
    project: { suites },
    state: { activeSuiteID: activeSuite }
  } = session;
  const [confirmNew, setConfirmNew] = React.useState(false);
  const [languageMap, setLanguageMap] = useState<any>({
    suitesTab: {
      deleteNotice: "Delete this suite?",
      tooltip: "double click to modify the name,right click to export or delete suites",
      notDeleteNotice:"only one suites is not allowed to be deleted!"
    }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });
  }, []);
  return (
    <Drawer>
      <SuiteCreateDialog open={confirmNew} setOpen={setConfirmNew} />
      <EditorToolbar
        onAdd={() => setConfirmNew(true)}
        onRemove={
          suites.length > 1
            ? () => {
              const doDelete = window.confirm(languageMap.suitesTab.deleteNotice);
              if (doDelete) {
                window.sideAPI.suites.delete(activeSuite);
              }
            } : () => {
              window.confirm(languageMap.suitesTab.notDeleteNotice);
            }

          // :undefined
        }
      />
      <List className="flex-col flex-1 overflow-y" dense>
        {suites
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ id, name }) => (
            <Tooltip title={languageMap.suitesTab.tooltip}>
              <RenamableListItem
                id={id}
                key={id}
                name={name}
                onContextMenu={() => {
                  window.sideAPI.menus.open("suiteManager", [id]);
                }}
                rename={rename}
                selected={id === activeSuite}
                setSelected={setSelected}
              />
            </Tooltip>
          ))}
      </List>
    </Drawer>
  );
};

export default SuitesDrawer;
