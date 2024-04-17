import { StateShape, UserPrefs } from "@seleniumhq/side-api";
import { defaultUserPrefs } from "@seleniumhq/side-api/dist/models/state";
import { window as ProjectWindow } from "browser/windows/ProjectEditor/controller";
import { window as PlaybackWindow } from "browser/windows/PlaybackWindow/controller";
import Store from "electron-store";
import { BrowserInfo } from "main/types";
import config from "./config";
import { englishMap } from "browser/enums/I18N";

export interface StorageSchema {
  config: typeof config;
  browserInfo: BrowserInfo;
  panelGroups: Record<string, number[]>;
  plugins: string[];
  projectStates: Record<
    string,
    Omit<StateShape, "playback" | "recorder" | "status">
  >;
  recentProjects: string[];
  windowSize: [number, number];
  windowPosition: [number, number];
  windowSizePlayback: [number, number];
  windowPositionPlayback: [number, number];
  userPrefs: UserPrefs;

  /***********以下是我新增*************/
  language: string;
  languageMap: any;
  /***********以上是我新增*************/

}

export default () => {
  const ProjectWindowController = ProjectWindow();
  const PlaybackWindowController = PlaybackWindow();

  const store = new Store<StorageSchema>({
    defaults: {
      browserInfo: {
        browser: "electron",
        useBidi: false,
        version: ""
      },
      config,
      panelGroups: {
        "editor-playback": [25, 75],
        "playback-logger": [80, 20]
      },
      plugins: [],
      projectStates: {},
      recentProjects: [],
      windowSize: [
        ProjectWindowController.width!,
        ProjectWindowController.height!
      ],
      windowPosition: [ProjectWindowController.x!, ProjectWindowController.y!],
      windowSizePlayback: [
        PlaybackWindowController.width!,
        PlaybackWindowController.height!
      ],
      windowPositionPlayback: [
        PlaybackWindowController.x!,
        PlaybackWindowController.y!
      ],
      userPrefs: defaultUserPrefs,
      language: "en",
      languageMap:  englishMap,
    }
  });
  return store;
}
