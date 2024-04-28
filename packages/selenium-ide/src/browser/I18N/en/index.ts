import { Commands as commandMapEnglish } from '@seleniumhq/side-model'
import { flattenNestedObject } from '../util'

const windowTabEnglish = {
  file: '&File',
  edit: '&Edit',
  view: '&View',
  help: '&Help',
  title: 'Project Editor',
}

const electronMenuTreeEnglish = {
  about: 'About Electron',
  services: 'Services',
  hideElectron: 'Hide Electron',
  hideOthers: 'Hide Others',
  showAll: 'Show All',
  quit: 'Quit',
}

const fileMenuTreeEnglish = {
  newProject: 'New Project',
  loadProject: 'Load Project',
  recentProjects: 'Recent Projects',
  saveProject: 'Save Project',
  saveProjectAs: 'Save Project As...',
}

const editMenuTreeEnglish = {
  undo: 'Undo (for input)',
  redo: 'Redo (for input)',
  cut: 'Cut (for input)',
  copy: 'Copy (for input)',
  paste: 'Paste (for input)',
}

const viewMenuTreeEnglish = {
  showDevTools: 'Show DevTools',
  resetPlaybackWindows: 'Reset Playback Windows',
  refreshPlaybackWindow: 'Refresh Playback Window',
}

const helpMenuTreeEnglish = {
  dumpSession: 'Dump Session To File',
}

const mainMenuEnglish = { tests: 'Tests', suites: 'Suites', config: 'Config' }

const configTabEnglish = {
  project: 'Project',
  system: 'System',
  outPut: 'outPut',
}

const outPutConfigEnglish = {
  webLink: 'click to jump to the testing platform',
  platformUrl: 'test platform address',
  platformUrlHelper: 'The final use case is displayed on this front-end page',
  serviceHost: 'backend service address',
  serviceHostHelper:
    'export the address of the use case to the backend service',
  businessListUrl: 'business list url address',
  businessListUrlHelper:
    'url address of the business list to which the use case belongs',
  caseInBusiness: 'business to which the use case belongs',
  caseInBusinessHelper: 'test cases will be classified under this business',
  exportUrl: 'export interface url address',
  exportUrlHelper: 'export the url address of the test case',
  exportBtn: 'export',
  platformError: 'please enter the testing platform address!',
  checkUrlError:
    'please enter the backend service address and the url address for exporting the test case!',
  checkBusinessUrlError:
    'please check if the backend service address and the corresponding business list URL address are correct!',
  warn: 'warn',
  success: 'export success',
  fail: 'export fail',
  caseId: 'exported test case id:',
  failMessage: 'please contact the backend developer for assistance!',
}

const systemConfigEnglish = {
  theme: 'Theme preference',
  themeHelper: 'restart required to take effect',
  commandInsert: 'New command insert preference',
  camelCase: 'Camel case various names in UI',
  ignoreErrors: 'Ignore Certificate/SSL errors',
  codeExport: 'Disable code export compatibility mode',
  bidi: 'Use Bidi',
  bidiHelper: 'Bidi settings (Experimental / Non working)',
  playbackBrowser: 'Selected Playback Browser',
  restartDriver: 'restart driver',
}

const projectConfigEnglish = {
  name: 'name',
  stepTimeout: 'Step Timeout (MILLISECONDS)',
  stepTimeoutHelper: 'Steps will fail if they take longer than this setting',
  stepDelay: 'Step Delay (MILLISECONDS)',
  stepDelayHelper: 'Each step will pause by this setting',
  projectPlugins: 'Project Plugins',
}

const suitesTabEnglish = {
  testInSuite: 'Tests in suite',
  dropTests: 'Drop Tests Here',
  AvailableTests: 'Available tests',
  name: 'Name',
  timeout: 'Timeout (MILLISECONDS)',
  parallel: 'Parallel',
  persistSession: 'Persist Session',
  dialogTitle: 'Please specify the new suite name',
  suiteName: 'Suite Name',
  cancel: 'Cancel',
  create: 'Create',
  deleteNotice: 'Are you sure you want to delete suite {name}?',
  tooltip:
    'double click to modify the name,right click to export or delete suites',
  notDeleteNotice: 'only one suites is not allowed to be deleted!',
  noSuiteSelected: 'No Suite Selected',
  playSuite: 'Play Suite',
  deleteSuite: 'Delete suite(s)',
  exportSuite: 'Export suite(s) to ',
}

const testsTabEnglish = {
  allTests: '[All tests]',
  deleteNotice: 'Delete this test?',
  tooltip:
    'double click to modify the name,right click to export or delete test case',
  notDeleteNotice: 'only one test case is not allowed to be deleted!',
  dialogTitle: 'Please specify the new test name',
  testName: 'Test Name',
  cancel: 'Cancel',
  create: 'Create',
  noTestSelected: 'No Test Selected',
  noCommandsSelected: 'No commands selected',
  add: 'Add',
  remove: 'Remove',
  deleteTest: 'Delete test(s)',
  exportTest: 'Export test(s) to ',
}

const playbackEnglish = {
  content: 'This is where recording and playback will occur',
  windowSize:
    'Force panel window dimensions (will zoom out if larger than panel and crop if smaller)',
  width: 'W',
  height: 'H',
  url: 'URL',
}

const splashEnglish = {
  present: 'Welcome to the Selenium IDE client',
  logPath: 'Your log file path:',
  openNotice: 'You can load or create one project',
  loadProject: 'load project',
  createProject: 'create project',
  openRecent: 'open recent',
  languageSelect: 'choose language',
}

// 用例编辑页面
const testCoreEnglish = {
  play: 'Play',
  stop: 'Stop',
  record: 'Record',
  pause: 'Pause',
  removeCommand: 'Remove Command',
  addCommand: 'Add Command',
  stepCommand: 'Command',
  openNewWindow: 'Opens a new window',
  notOpenNewWindow: 'Does not open a new window',
  enableCommand: 'Enable this command',
  disableCommand: 'Disable this command',
  comment: 'Comment',
  target: 'Target',
  value: 'Value',
  windowHandleName: 'Window Handle Name',
  windowHandleNameNote: 'Variable name to set to the new window handle',
  commands: 'Commands',
  tabCommand: 'Cmd',
  tabTarget: 'Target',
  tabValue: 'Value',
  cutCommand: 'Cut Command',
  copyCommand: 'Copy Command',
  pasteCommand: 'Paste Command',
  disableCommandSide: 'Disable Command',
  deleteCommand: 'Delete Command',
  appendCommand: 'Append Command',
  insertCommand: 'Insert Command',
  recordFromHere: 'Record From Here',
  playToHere: 'Play To Here',
  playFromHere: 'Play From Here',
  playThisStep: 'Play This Step',
  playFromStart: 'Play From Start',
}

export const langaugeMapEn = {
  windowTab: windowTabEnglish,
  electronMenuTree: electronMenuTreeEnglish,
  fileMenuTree: fileMenuTreeEnglish,
  editMenuTree: editMenuTreeEnglish,
  viewMenuTree: viewMenuTreeEnglish,
  helpMenuTree: helpMenuTreeEnglish,
  mainMenu: mainMenuEnglish,
  testsTab: testsTabEnglish,
  suitesTab: suitesTabEnglish,
  configTab: configTabEnglish,
  systemConfig: systemConfigEnglish,
  projectConfig: projectConfigEnglish,
  outPutConfig: outPutConfigEnglish,
  splash: splashEnglish,
  playback: playbackEnglish,
  testCore: testCoreEnglish,
  commandMap: commandMapEnglish,
}

// Creating a type of this so other locales are prompted to be filled in by
// the developer
export type LanguageMap = typeof langaugeMapEn

const flattenedMap = flattenNestedObject(langaugeMapEn)
export default flattenedMap
