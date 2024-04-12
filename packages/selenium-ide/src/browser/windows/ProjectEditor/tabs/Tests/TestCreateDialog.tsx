import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

const {
  state: { setActiveTest: setSelected }
} = window.sideAPI;

type CloseReason = "Create" | "Cancel"

export interface TestNewDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TestNewDialog: React.FC<TestNewDialogProps> = ({ open, setOpen }) => {
  const [testName, setTestName] = React.useState("");

  const createTest = async () => {
    const newTest = await window.sideAPI.tests.create(testName);
    setSelected(newTest.id);
  };

  const handleClose = async (value: CloseReason) => {
    if (value === "Create") {
      createTest();
    }
    setOpen(false);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      handleClose("Create");
    }
  };
  const [languageMap, setLanguageMap] = useState<any>({
    testsTab: {
      dialogTitle: "Please specify the new test name",
      testName: "Test Name",
      cancel: "Cancel",
      create: "Create"
    }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });
  }, []);

  return (
    <Dialog
      classes={{
        container: "justify-content-start"
      }}
      onClose={handleClose}
      open={open}
    >
      <DialogContent>
        <DialogContentText>{languageMap.testsTab.dialogTitle}</DialogContentText>
        <TextField
          autoFocus
          fullWidth
          id="name"
          label={languageMap.testsTab.testName}
          margin="dense"
          onChange={(e) => setTestName(e.target.value)}
          onKeyDown={onKeyDown}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose("Cancel")}>{languageMap.testsTab.cancel}</Button>
        <Button onClick={() => handleClose("Create")}>{languageMap.testsTab.create}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TestNewDialog;
