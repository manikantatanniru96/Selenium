import { MenuComponent } from "main/types";
import { menuFactoryFromCommandFactory } from "../utils";

export const commands: MenuComponent = (session) => () =>
  [
    { label: session.store.get("languageMap").editMenuTree.undo, role: "undo" },
    { label: session.store.get("languageMap").editMenuTree.redo, role: "redo" },
    { type: "separator" },
    { label: session.store.get("languageMap").editMenuTree.cut, role: "cut" },
    { label: session.store.get("languageMap").editMenuTree.copy, role: "copy" },
    { label: session.store.get("languageMap").editMenuTree.paste, role: "paste" }
  ];


export default menuFactoryFromCommandFactory(commands);
