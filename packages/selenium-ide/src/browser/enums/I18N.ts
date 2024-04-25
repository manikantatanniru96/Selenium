// 窗口顶部菜单
const windowTabEnglish = {
    file: "&File",
    edit: "&Edit",
    view: "&View",
    help: "&Help",
    title: "Project Editor"
};
const windowTabChinese = {
    file: "&文件",
    edit: "&编辑",
    view: "&查看",
    help: "&帮助",
    title: "项目编辑器"
};
// Electron菜单
const electronMenuTreeChinese = {
    about: "Electron信息",
    services: "服务信息",
    hideElectron: "隐藏Electron",
    hideOthers: "隐藏其他",
    showAll: "显示所有",
    quit: "退出"
};
const electronMenuTreeEnglish = {
    about: "About Electron",
    services: "Services",
    hideElectron: "Hide Electron",
    hideOthers: "Hide Others",
    showAll: "Show All",
    quit: "Quit"
};
// 文件菜单
const fileMenuTreeEnglish = {
    newProject: "New Project",
    loadProject: "Load Project",
    recentProjects: "Recent Projects",
    saveProject: "Save Project",
    saveProjectAs: "Save Project As..."
};
const fileMenuTreeChinese = {
    newProject: "创建项目",
    loadProject: "导入项目",
    recentProjects: "最近使用项目",
    saveProject: "保存项目",
    saveProjectAs: "项目另存为..."
};
// 编辑菜单
const editMenuTreeEnglish = {
    undo: "Undo (for input)",
    redo: "Redo (for input)",
    cut: "Cut (for input)",
    copy: "Copy (for input)",
    paste: "Paste (for input)"
};
const editMenuTreeChinese = {
    undo: "撤销 (针对输入)",
    redo: "恢复 (针对输入)",
    cut: "剪切 (针对输入)",
    copy: "复制 (针对输入)",
    paste: "粘贴 (针对输入)"
};

// 查看菜单
const viewMenuTreeEnglish = {
    showDevTools: "Show DevTools",
    resetPlaybackWindows: "Reset Playback Windows",
    refreshPlaybackWindow: "Refresh Playback Window"
};
const viewMenuTreeChinese = {
    showDevTools: "开发者工具",
    resetPlaybackWindows: "重置回放窗口",
    refreshPlaybackWindow: "刷新回放窗口"
};

// 帮助菜单
const helpMenuTreeEnglish = {
    dumpSession: "Dump Session To File"

};
const helpMenuTreeChinese = {
    dumpSession: "将Session转存到文件"
};

// 主页面菜单
const maiMenuChinese = {tests: "用例", suites: "集合", config: "配置"};
const maiMenuEnglish = {tests: "Tests", suites: "Suites", config: "Config"};

// 配置tab
const configTabEnglish = {project: "Project", system: "System", outPut: "outPut"};
const configTabChinese = {project: "项目配置", system: "系统配置", outPut: "导出配置"};

// 导出配置页面
const outPutConfigEnglish = {
    webLink: "click to jump to the testing platform",
    platformUrl: "test platform address",
    platformUrlHelper: "The final use case is displayed on this front-end page",
    serviceHost: "backend service address",
    serviceHostHelper: "export the address of the use case to the backend service",
    businessListUrl: "business list url address",
    businessListUrlHelper: "url address of the business list to which the use case belongs",
    caseInBusiness: "business to which the use case belongs",
    caseInBusinessHelper: "test cases will be classified under this business",
    exportUrl: "export interface url address",
    exportUrlHelper: "export the url address of the test case",
    exportBtn: "export",
    platformError: "please enter the testing platform address!",
    checkUrlError: "please enter the backend service address and the url address for exporting the test case!",
    checkBusinessUrlError: "please check if the backend service address and the corresponding business list URL address are correct!",
    warn: "warn",
    success: "export success",
    fail: "export fail",
    caseId: "exported test case id:",
    failMessage: "please contact the backend developer for assistance!"
};
const outPutConfigChinese = {
    webLink: "点击跳转至测试平台",
    platformUrl: "测试平台地址",
    platformUrlHelper: "用例最终展示在此前端页面",
    serviceHost: "后端服务地址",
    serviceHostHelper: "将用例导出到后端服务的地址",
    businessListUrl: "所属业务列表url地址",
    businessListUrlHelper: "用例所属的业务列表的url地址",
    caseInBusiness: "用例所属业务",
    caseInBusinessHelper: "测试用例将会归类到该业务下",
    exportUrl: "导出接口地址",
    exportUrlHelper: "用于导出用例的url地址",
    exportBtn: "导出",
    platformError: "请输入测试平台地址!",
    checkUrlError: "请输入后端服务地址和导出用例的url地址!",
    checkBusinessUrlError: "请检查后端服务地址和所属业务列表url地址否正确!",
    warn: "警告",
    success: "导出成功",
    fail: "导出失败",
    caseId: "导出的用例id:",
    failMessage: "请联系后台开发人员处理!"
};

// 系统配置页面
const systemConfigChinese = {
    theme: "主题偏好",
    themeHelper: "需要重新启动才能生效",
    commandInsert: "新命令插入首选项",
    camelCase: "驼峰式大小写",
    ignoreErrors: "忽略证书/SSL错误",
    codeExport: "禁用代码导出兼容模式",
    bidi: "使用bidi模式",
    bidiHelper: "Bidi设置（实验性质)",
    playbackBrowser: "选择回放浏览器",
    restartDriver: "重启 driver"
};
const systemConfigEnglish = {
    theme: "Theme preference",
    themeHelper: "restart required to take effect",
    commandInsert: "New command insert preference",
    camelCase: "Camel case various names in UI",
    ignoreErrors: "Ignore Certificate/SSL errors",
    codeExport: "Disable code export compatibility mode",
    bidi: "Use Bidi",
    bidiHelper: "Bidi settings (Experimental / Non working)",
    playbackBrowser: "Selected Playback Browser",
    restartDriver: "restart driver"

};

// 项目配置页面
const projectConfigEnglish = {
    name: "name",
    stepTimeout: "Step Timeout (MILLISECONDS)",
    stepTimeoutHelper: "Steps will fail if they take longer than this setting",
    stepDelay: "Step Delay (MILLISECONDS)",
    stepDelayHelper: "Each step will pause by this setting",
    projectPlugins: "Project Plugins"
};
const projectConfigChinese = {
    name: "项目名称",
    stepTimeout: "步骤超时（毫秒）",
    stepTimeoutHelper: "如果花费的时间超过此设置,步骤将失败",
    stepDelay: "步骤延迟（毫秒）",
    stepDelayHelper: "每个步骤都会使用此设置暂停",
    projectPlugins: "项目插件"
};
// 集合Tab
const suitesTabEnglish = {
    testInSuite: "Tests in suite",
    dropTests: "Drop Tests Here",
    AvailableTests: "Available tests",
    name: "Name",
    timeout: "Timeout (MILLISECONDS)",
    parallel: "Parallel",
    persistSession: "Persist Session",
    dialogTitle: "Please specify the new suite name",
    suiteName: "Suite Name",
    cancel: "Cancel",
    create: "Create",
    deleteNotice: "Delete this suite?",
    tooltip: "double click to modify the name,right click to export or delete suites",
    notDeleteNotice: "only one suites is not allowed to be deleted!",
    noSuiteSelected: "No Suite Selected",
    playSuite: "Play Suite",
    deleteSuite: "Delete suite(s)",
    exportSuite: "Export suite(s) to "
};
const suitesTabChinese = {
    testInSuite: "集合中的用例",
    dropTests: "放置用例到此处",
    AvailableTests: "可使用的用例列表",
    name: "集合名称",
    timeout: "超时时间（毫秒）",
    parallel: "并发执行",
    persistSession: "持久化会话",
    dialogTitle: "请指定新的集合名称",
    suiteName: "集合名称",
    cancel: "取消",
    create: "创建",
    deleteNotice: "确认删除集合?",
    tooltip: "双击修改名称,右键导出或者删除集合",
    notDeleteNotice: "只有一个集合时不允许删除!",
    noSuiteSelected: "没有集合被选中",
    playSuite: "回放集合",
    deleteSuite: "删除集合",
    exportSuite: "导出集合为"
};

// 用例Tab
const testsTabEnglish = {
    allTests: "[All tests]",
    deleteNotice: "Delete this test?",
    tooltip: "double click to modify the name,right click to export or delete test case",
    notDeleteNotice: "only one test case is not allowed to be deleted!",
    dialogTitle: "Please specify the new test name",
    testName: "Test Name",
    cancel: "Cancel",
    create: "Create",
    noTestSelected: "No Test Selected",
    noCommandsSelected: "No commands selected",
    add: "Add",
    remove: "Remove",
    deleteTest: "Delete test(s)",
    exportTest: "Export test(s) to "
};
const testsTabChinese = {
    allTests: "[所有用例]",
    deleteNotice: "确认删除用例?",
    tooltip: "双击修改名称,右键导出或者删除集合",
    notDeleteNotice: "只有一个用例时不允许删除!",
    dialogTitle: "请指定新的用例名称",
    testName: "用例名称",
    cancel: "取消",
    create: "创建",
    noTestSelected: "没有用例被选中",
    noCommandsSelected: "没有指令被选中",
    add: "添加",
    remove: "删除",
    deleteTest: "删除用例",
    exportTest: "导出用例为"
};

// 选择项目页面
const splashChinese = {
    present: "欢迎使用Selenium IDE桌面版",
    logPath: "您的日志文件路径:",
    openNotice: "您可以加载或者创建项目",
    loadProject: "导入项目",
    createProject: "新建项目",
    recentOpen: "最近打开:",
    languageSelect: "选择语言"
};

// 用例回放页面
const playbackEnglish = {
    content: "This is where recording and playback will occur",
    windowSize: "Force panel window dimensions (will zoom out if larger than panel and crop if smaller)",
    width: "W",
    height: "H",
    url: "URL"

};

const playbackChinese = {
    content: "非bidi模式下,用例的录制和回放将会展示在这里",
    windowSize: "强制窗口尺寸（如果大于面板则缩小，如果小于面板则裁剪）",
    width: "宽度",
    height: "高度",
    url: "录制地址"

};

const splashEnglish = {
    present: "Welcome to the Selenium IDE client",
    logPath: "Your log file path:",
    openNotice: "You can load or create one project",
    loadProject: "load project",
    createProject: "create project",
    openRecent: "open recent:",
    languageSelect: "choose language"
};

// 用例编辑页面
const testCoreEnglish = {
    play: "Play",
    stop: "Stop",
    record: "Record",
    pause: "Pause",
    removeCommand: "Remove Command",
    addCommand: "Add Command",
    stepCommand: "Command",
    openNewWindow: "Opens a new window",
    notOpenNewWindow: "Does not open a new window",
    enableCommand: "Enable this command",
    disableCommand: "Disable this command",
    comment: "Comment",
    target: "Target",
    value: "Value",
    windowHandleName: "Window Handle Name",
    windowHandleNameNote: "Variable name to set to the new window handle",
    commands: "Commands",
    tabCommand: "Cmd",
    tabTarget: "Target",
    tabValue: "Value",
    cutCommand: "Cut Command",
    copyCommand: "Copy Command",
    pasteCommand: "Paste Command",
    disableCommandSide: "Disable Command",
    deleteCommand: "Delete Command",
    appendCommand: "Append Command",
    insertCommand: "Insert Command",
    recordFromHere: "Record From Here",
    playToHere: "Play To Here",
    playFromHere: "Play From Here",
    playThisStep: "Play This Step",
    playFromStart: "Play From Start"
};
const testCoreChinese = {
    play: "回放",
    stop: "停止",
    record: "录制",
    pause: "暂停",
    removeCommand: "删除指令",
    addCommand: "添加指令",
    stepCommand: "指令",
    openNewWindow: "打开一个新窗口",
    notOpenNewWindow: "不打开新窗口",
    enableCommand: "启用当前指令",
    disableCommand: "禁用当前指令",
    comment: "备注",
    target: "关键字",
    value: "指令值",
    windowHandleName: "窗口句柄名称",
    windowHandleNameNote: "要设置为新窗口句柄的变量名称",
    commands: "指令集",
    tabCommand: "指令",
    tabTarget: "关键字",
    tabValue: "指令值",
    cutCommand: "剪切指令",
    copyCommand: "复制指令",
    pasteCommand: "粘贴指令",
    disableCommandSide: "禁用指令",
    deleteCommand: "删除指令",
    appendCommand: "追加指令",
    insertCommand: "插入指令",
    recordFromHere: "从此处录制",
    playToHere: "回放到此处",
    playFromHere: "从此处回放",
    playThisStep: "回放此步骤",
    playFromStart: "从头开始回放"
};
// 用例的所有指令
const commandMapEnglish = {
    "acceptAlert": {
        "name": "accept alert",
        "description": "Affects a currently showing alert. This \n        command instructs Selenium to accept it."
    },
    "acceptConfirmation": {
        "name": "accept confirmation",
        "description": "Affects a currently showing confirmation alert. This \n        command instructs Selenium to accept it."
    },
    "addSelection": {
        "name": "add selection",
        "description": "Add a selection to the set of options in a multi-select element.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "answerPrompt": {
        "name": "answer prompt",
        "description": "Affects a currently showing alert prompt. This command \n        instructs Selenium to provide the specified answer to it.",
        "target": {
            "name": "answer",
            "description": "The answer to give in response to the prompt pop-up"
        }
    },
    "assert": {
        "name": "assert",
        "description": "Check that a variable is an expected value. The variable's \n        value will be converted to a string for comparison. The test will stop if the assert fails.",
        "target": {
            "name": "variable name",
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        },
        "value": {
            "name": "expected value",
            "description": "The result you expect a variable to contain (e.g., true, false,\n    or some other value)"
        }
    },
    "assertAlert": {
        "name": "assert alert",
        "description": "Confirm that an alert has been rendered with the provided text. The test will stop if the assert fails.",
        "target": {
            "name": "alert text",
            "description": "text to check"
        }
    },
    "assertChecked": {
        "name": "assert checked",
        "description": "Confirm that the target element has been checked. The test will stop if the assert fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "assertConfirmation": {
        "name": "assert confirmation",
        "description": "Confirm that a confirmation has been rendered. The test will stop if the assert fails.",
        "target": {
            "name": "alert text",
            "description": "text to check"
        }
    },
    "assertEditable": {
        "name": "assert editable",
        "description": "Confirm that the target element is editable. The test will stop if the assert fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "assertElementPresent": {
        "name": "assert element present",
        "description": "Confirm that the target element is present somewhere on the page. The test will stop if the assert fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "assertElementNotPresent": {
        "name": "assert element not present",
        "description": "Confirm that the target element is not present anywhere on the page. The test will stop if the assert fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "assertNotChecked": {
        "name": "assert not checked",
        "description": "Confirm that the target element has not been checked. The test will stop if the assert fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "assertNotEditable": {
        "name": "assert not editable",
        "description": "Confirm that the target element is not editable. The test will stop if the assert fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "assertNotSelectedValue": {
        "name": "assert not selected value",
        "description": "Confirm that the value attribute of the selected option \n        in a dropdown element does not contain the provided value. The test will stop if the assert fails.",
        "target": {
            "name": "select locator",
            "description": "An element locator identifying a drop-down menu"
        },
        "value": {
            "name": "text",
            "description": "An exact string match. Support for pattern matching is in the\n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details"
        }
    },
    "assertNotText": {
        "name": "assert not text",
        "description": "Confirm that the text of an element does not contain the provided value.\n      The test will stop if the assert fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "text",
            "description": "An exact string match. Support for pattern matching is in the\n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details"
        }
    },
    "assertPrompt": {
        "name": "assert prompt",
        "description": "Confirm that a JavaScript prompt has been rendered. The test will stop if the assert fails.",
        "target": {
            "name": "alert text",
            "description": "text to check"
        }
    },
    "assertSelectedValue": {
        "name": "assert selected value",
        "description": "Confirm that the value attribute of the selected option \n        in a dropdown element contains the provided value. The test will stop if the assert fails.",
        "target": {
            "name": "select locator",
            "description": "An element locator identifying a drop-down menu"
        },
        "value": {
            "name": "text",
            "description": "An exact string match. Support for pattern matching is in the\n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details"
        }
    },
    "assertSelectedLabel": {
        "name": "assert selected label",
        "description": "Confirm that the label of the selected option in a dropdown \n        element contains the provided value. The test will stop if the assert fails.",
        "target": {
            "name": "select locator",
            "description": "An element locator identifying a drop-down menu"
        },
        "value": {
            "name": "text",
            "description": "An exact string match. Support for pattern matching is in the\n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details"
        }
    },
    "assertText": {
        "name": "assert text",
        "description": "Confirm that the text of an element contains the provided value.\n      The test will stop if the assert fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "text",
            "description": "An exact string match. Support for pattern matching is in the\n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details"
        }
    },
    "assertTitle": {
        "name": "assert title",
        "description": "Confirm the title of the current page contains the provided text.\n      The test will stop if the assert fails.",
        "target": {
            "name": "text",
            "description": "An exact string match. Support for pattern matching is in the\n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details"
        }
    },
    "assertValue": {
        "name": "assert value",
        "description": "Confirm the (whitespace-trimmed) value of an input field \n        (or anything else with a value parameter). For checkbox/radio elements, \n        the value will be \"on\" or \"off\" depending on whether the element is \n        checked or not. The test will stop if the assert fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "text",
            "description": "An exact string match. Support for pattern matching is in the\n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details"
        }
    },
    "dismissConfirmation": {
        "name": "dismiss confirmation",
        "description": "Affects a currently showing confirmation alert. This \n        command instructs Selenium to dismiss it."
    },
    "dismissPrompt": {
        "name": "dismiss prompt",
        "description": "Affects a currently showing alert prompt. This command \n        instructs Selenium to dismiss it."
    },
    "check": {
        "name": "check",
        "description": "Check a toggle-button (checkbox/radio).",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "click": {
        "name": "click",
        "description": "Clicks on a target element (e.g., a link, button, checkbox, or radio button).",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "clickAt": {
        "name": "click at",
        "description": "Clicks on a target element (e.g., a link, button, checkbox, \n        or radio button). The coordinates are relative to the target element \n        (e.g., 0,0 is the top left corner of the element) and are mostly used \n        to check effects that relay on them, for example the material ripple effect.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "coord string",
            "description": "Specifies the x,y position (e.g., - 10,20) of the mouse event\n    relative to the element found from a locator"
        }
    },
    "close": {
        "name": "close",
        "description": "Closes the current window. There is no need to close the \n        initial window, IDE will re-use it; closing it may cause a performance \n        penalty on the test."
    },
    "debugger": {
        "name": "debugger",
        "description": "Breaks the execution and enters debugger"
    },
    "do": {
        "name": "do",
        "description": "Create a loop that executes the proceeding commands at \n        least once. Terminate the branch with the repeat if command."
    },
    "doubleClick": {
        "name": "double click",
        "description": "Double clicks on an element (e.g., a link, button, checkbox, or radio button).",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "doubleClickAt": {
        "name": "double click at",
        "description": "Double clicks on a target element (e.g., a link, button, \n        checkbox, or radio button). The coordinates are relative to the target \n        element (e.g., 0,0 is the top left corner of the element) and are mostly \n        used to check effects that relay on them, for example the material \n        ripple effect.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "coord string",
            "description": "Specifies the x,y position (e.g., - 10,20) of the mouse event\n    relative to the element found from a locator"
        }
    },
    "dragAndDropToObject": {
        "name": "drag and drop to object",
        "description": "Drags an element and drops it on another element.",
        "target": {
            "name": "locator of object to be dragged",
            "description": "The locator of element to be dragged"
        },
        "value": {
            "name": "locator of drag destination object",
            "description": "The locator of an element whose location (e.g., the center-most\n    pixel within it) will be the point where locator of object to be dragged is\n    dropped"
        }
    },
    "echo": {
        "name": "echo",
        "description": "Prints the specified message. Useful for debugging.",
        "target": {
            "name": "message",
            "description": "The message to print"
        }
    },
    "editContent": {
        "name": "edit content",
        "description": "Sets the value of a content editable element as if you typed in it.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "value",
            "description": "The value to type"
        }
    },
    "else": {
        "name": "else",
        "description": "Part of an if block. Execute the commands in this branch \n        when an if and/or else if condition are not met. Terminate the branch \n        with the end command."
    },
    "elseIf": {
        "name": "else if",
        "description": "Part of an if block. Execute the commands in this branch \n        when an if condition has not been met. Terminate the branch with the \n        end command.",
        "target": {
            "name": "conditional expression",
            "description": "JavaScript expression that returns a boolean result for use\n    in control flow commands"
        }
    },
    "end": {
        "name": "end",
        "description": "Terminates a control flow block for if, while, and times."
    },
    "executeScript": {
        "name": "execute script",
        "description": "Executes a snippet of JavaScript in the context of the \n        currently selected frame or window. The script fragment will be executed \n        as the body of an anonymous function.  To store the return value, use \n        the 'return' keyword and provide a variable name in the value input field.",
        "target": {
            "name": "script",
            "description": "The JavaScript snippet to run"
        },
        "value": {
            "name": "variable name",
            "isOptional": true,
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        }
    },
    "executeAsyncScript": {
        "name": "execute async script",
        "description": "Executes an async snippet of JavaScript in the context of \n        the currently selected frame or window. The script fragment will be \n        executed as the body of an anonymous function and must return a Promise. \n        The Promise result will be saved on the variable if you use the 'return' \n        keyword.",
        "target": {
            "name": "script",
            "description": "The JavaScript snippet to run"
        },
        "value": {
            "name": "variable name",
            "isOptional": true,
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        }
    },
    "forEach": {
        "name": "for each",
        "description": "Create a loop that executes the proceeding commands for each item in a given collection.",
        "target": {
            "name": "array variable name",
            "description": "The name of a variable containing a JavaScript array"
        },
        "value": {
            "name": "iterator variable name",
            "description": "The name of the variable used when iterating over a collection in a looping control flow command (e.g., for each)"
        }
    },
    "if": {
        "name": "if",
        "description": "Create a conditional branch in your test. Terminate the branch with the end command.",
        "target": {
            "name": "conditional expression",
            "description": "JavaScript expression that returns a boolean result for use\n    in control flow commands"
        }
    },
    "mouseDown": {
        "name": "mouse down",
        "description": "Simulates a user pressing the left mouse button (without \n        releasing it yet).",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "mouseDownAt": {
        "name": "mouse down at",
        "description": "Simulates a user pressing the left mouse button (without \n        releasing it yet) at the specified location.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "coord string",
            "description": "Specifies the x,y position (e.g., - 10,20) of the mouse event\n    relative to the element found from a locator"
        }
    },
    "mouseMoveAt": {
        "name": "mouse move at",
        "description": "Simulates a user pressing the mouse button (without releasing \n        it yet) on the specified element.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "coord string",
            "description": "Specifies the x,y position (e.g., - 10,20) of the mouse event\n    relative to the element found from a locator"
        }
    },
    "mouseOut": {
        "name": "mouse out",
        "description": "Simulates a user moving the mouse pointer away from the specified element.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "mouseOver": {
        "name": "mouse over",
        "description": "Simulates a user hovering a mouse over the specified element.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "mouseUp": {
        "name": "mouse up",
        "description": "Simulates the event that occurs when the user releases the \n        mouse button (e.g., stops holding the button down).",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "mouseUpAt": {
        "name": "mouse up at",
        "description": "Simulates the event that occurs when the user releases the \n        mouse button (e.g., stops holding the button down) at the specified location.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "coord string",
            "description": "Specifies the x,y position (e.g., - 10,20) of the mouse event\n    relative to the element found from a locator"
        }
    },
    "open": {
        "name": "open",
        "description": "Opens a URL and waits for the page to load before proceeding. \n        This accepts both relative and absolute URLs.",
        "target": {
            "name": "url",
            "description": "The URL to open (may be relative or absolute)"
        }
    },
    "pause": {
        "name": "pause",
        "description": "Wait for the specified amount of time.",
        "target": {
            "name": "wait time",
            "description": "The amount of time to wait (in milliseconds)"
        }
    },
    "removeSelection": {
        "name": "remove selection",
        "description": "Remove a selection from the set of selected options in a \n        multi-select element using an option locator.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "option",
            "description": "An option locator, typically just an option label (e.g. \"John Smith\")"
        }
    },
    "repeatIf": {
        "name": "repeat if",
        "description": "Terminate a 'do' control flow branch conditionally. If \n        the result of the provided conditional expression is true, it starts \n        the do loop over.  Otherwise it ends the loop.",
        "target": {
            "name": "conditional expression",
            "description": "JavaScript expression that returns a boolean result for use\n    in control flow commands"
        },
        "value": {
            "name": "loop limit",
            "description": "Maximum number of times a looping control flow command can execute to protect against infinite loops"
        }
    },
    "run": {
        "name": "run",
        "description": "Runs a test case from the current project.",
        "target": {
            "name": "test case",
            "description": "Test case name from the project"
        }
    },
    "runScript": {
        "name": "run script",
        "description": "Creates a new \"script\" tag in the body of the current \n        test window, and adds the specified text into the body of the command. \n        Beware that JS exceptions thrown in these script tags aren't managed \n        by Selenium, so you should probably wrap your script in try/catch blocks \n        if there is any chance that the script will throw an exception.",
        "target": {
            "name": "script",
            "description": "The JavaScript snippet to run"
        }
    },
    "select": {
        "name": "select",
        "description": "Select an element from a drop-down menu using an option \n        locator. Option locators provide different ways of specifying a select \n        element (e.g., label=, value=, id=, index=). If no option locator prefix \n        is provided, a match on the label will be attempted.",
        "target": {
            "name": "select locator",
            "description": "An element locator identifying a drop-down menu"
        },
        "value": {
            "name": "option",
            "description": "An option locator, typically just an option label (e.g. \"John Smith\")"
        }
    },
    "selectFrame": {
        "name": "select frame",
        "description": "Selects a frame within the current window. You may invoke \n        this command multiple times to select a nested frame. NOTE: To select \n        the parent frame, use \"relative=parent\" as a locator. To select the top \n        frame, use \"relative=top\".  You can also select a frame by its 0-based \n        index number (e.g., select the first frame with \"index=0\", or the third \n        frame with \"index=2\").",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "selectWindow": {
        "name": "select window",
        "description": "Selects a popup window using a window locator. Once a \n        popup window has been selected, all commands will go to that window. \n        Window locators use handles to select windows.",
        "target": {
            "name": "window handle",
            "description": "A handle representing a specific page (tab, or window)"
        }
    },
    "sendKeys": {
        "name": "send keys",
        "description": "Simulates keystroke events on the specified element, as \n        though you typed the value key-by-key. This simulates a real user typing \n        every character in the specified string; it is also bound by the \n        limitations of a real user, like not being able to type into a invisible \n        or read only elements.  This is useful for dynamic UI widgets (like \n        auto-completing combo boxes) that require explicit key events. Unlike \n        the simple \"type\" command, which forces the specified value into the \n        page directly, this command will not replace the existing content.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "key sequence",
            "description": "A sequence of keys to type, can be used to send key strokes (e.g. ${KEY_ENTER})"
        }
    },
    "setSpeed": {
        "name": "set speed",
        "description": "Set execution speed (e.g., set the millisecond length of \n        a delay which will follow each Selenium operation). By default, there \n        is no such delay, e.g., the delay is 0 milliseconds. This setting is \n        global, and will affect all test runs, until changed.",
        "target": {
            "name": "wait time",
            "description": "The amount of time to wait (in milliseconds)"
        }
    },
    "setWindowSize": {
        "name": "set window size",
        "description": "Set the browser's window size, including the browser's interface.",
        "target": {
            "name": "resolution",
            "description": "Specify a window resolution using WidthxHeight. (e.g., 1280x800)"
        }
    },
    "store": {
        "name": "store",
        "description": "Save a target string as a variable for easy re-use.",
        "target": {
            "name": "text",
            "description": "The text to verify"
        },
        "value": {
            "name": "variable name",
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        }
    },
    "storeAttribute": {
        "name": "store attribute",
        "description": "Gets the value of an element attribute. The value of the \n        attribute may differ across browsers (this is the case for the \"style\" \n        attribute, for example).",
        "target": {
            "name": "attribute locator",
            "description": "An element locator followed by an @ sign and then the name of\n    the attribute, e.g. \"foo@bar\""
        },
        "value": {
            "name": "variable name",
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        }
    },
    "storeElementCount": {
        "name": "store element count",
        "description": "Gets the number of nodes that match the specified locator \n        (e.g. \"xpath=//table\" would give the number of tables).",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "variable name",
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        }
    },
    "storeJson": {
        "name": "store json",
        "description": "Ssave JSON as an object on a variable",
        "target": {
            "name": "json",
            "description": "A string representation of a JavaScript object"
        },
        "value": {
            "name": "variable name",
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        }
    },
    "storeText": {
        "name": "store text",
        "description": "Gets the text of an element and stores it for later use. \n        This works for any element that contains text.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "variable name",
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        }
    },
    "storeTitle": {
        "name": "store title",
        "description": "Gets the title of the current page.",
        "target": {
            "name": "variable name",
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        }
    },
    "storeValue": {
        "name": "store value",
        "description": "Gets the value of element and stores it for later use. \n        This works for any input type element.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "variable name",
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        }
    },
    "storeWindowHandle": {
        "name": "store window handle",
        "description": "Gets the handle of the current page.",
        "target": {
            "name": "window handle",
            "description": "A handle representing a specific page (tab, or window)"
        }
    },
    "times": {
        "name": "times",
        "description": "Create a loop that executes the proceeding commands n number of times.",
        "target": {
            "name": "times",
            "description": "The number of attempts a times control flow loop will execute\n    the commands within its block"
        },
        "value": {
            "name": "loop limit",
            "description": "Maximum number of times a looping control flow command can execute to protect against infinite loops"
        }
    },
    "type": {
        "name": "type",
        "description": "Sets the value of an input field, as though you typed it \n        in. Can also be used to set the value of combo boxes, check boxes, etc. \n        In these cases, value should be the value of the option selected, not \n        the visible text.  Chrome only: If a file path is given it will be \n        uploaded to the input (for type=file), NOTE: XPath locators are not \n        supported.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "value",
            "description": "The value to type"
        }
    },
    "uncheck": {
        "name": "uncheck",
        "description": "Uncheck a toggle-button (checkbox/radio).",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "verify": {
        "name": "verify",
        "description": "Soft assert that a variable is an expected value. The \n        variable's value will be converted to a string for comparison.\n        The test will continue even if the verify fails.",
        "target": {
            "name": "variable name",
            "description": "The name of a variable (without brackets). Used to either store\n    an expression's result in or reference for a check (e.g., with 'assert' or\n    'verify')"
        },
        "value": {
            "name": "expected value",
            "description": "The result you expect a variable to contain (e.g., true, false,\n    or some other value)"
        }
    },
    "verifyChecked": {
        "name": "verify checked",
        "description": "Soft assert that a toggle-button (checkbox/radio) has been checked.\n      The test will continue even if the verify fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "verifyEditable": {
        "name": "verify editable",
        "description": "Soft assert whether the specified input element is \n        editable (e.g., hasn't been disabled). The test will continue even if the verify fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "verifyElementPresent": {
        "name": "verify element present",
        "description": "Soft assert that the specified element is somewhere on the page.\n      The test will continue even if the verify fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "verifyElementNotPresent": {
        "name": "verify element not present",
        "description": "Soft assert that the specified element is not somewhere on the page.\n      The test will continue even if the verify fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "verifyNotChecked": {
        "name": "verify not checked",
        "description": "Soft assert that a toggle-button (checkbox/radio) has not been checked.\n      The test will continue even if the verify fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "verifyNotEditable": {
        "name": "verify not editable",
        "description": "Soft assert whether the specified input element is not \n        editable (e.g., has been disabled). The test will continue even if the verify fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        }
    },
    "verifyNotSelectedValue": {
        "name": "verify not selected value",
        "description": "Soft assert that the expected element has not been chosen \n        in a select menu by its option attribute. The test will continue even if the verify fails.",
        "target": {
            "name": "select locator",
            "description": "An element locator identifying a drop-down menu"
        },
        "value": {
            "name": "option",
            "description": "An option locator, typically just an option label (e.g. \"John Smith\")"
        }
    },
    "verifyNotText": {
        "name": "verify not text",
        "description": "Soft assert the text of an element is not present. The test will continue even if the verify fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "text",
            "description": "The text to verify"
        }
    },
    "verifySelectedLabel": {
        "name": "verify selected label",
        "description": "Soft assert the visible text for a selected option in the \n        specified select element. The test will continue even if the verify fails.",
        "target": {
            "name": "select locator",
            "description": "An element locator identifying a drop-down menu"
        },
        "value": {
            "name": "text",
            "description": "An exact string match. Support for pattern matching is in the\n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details"
        }
    },
    "verifySelectedValue": {
        "name": "verify selected value",
        "description": "Soft assert that the expected element has been chosen in \n        a select menu by its option attribute. The test will continue even if the verify fails.",
        "target": {
            "name": "select locator",
            "description": "An element locator identifying a drop-down menu"
        },
        "value": {
            "name": "option",
            "description": "An option locator, typically just an option label (e.g. \"John Smith\")"
        }
    },
    "verifyText": {
        "name": "verify text",
        "description": "Soft assert the text of an element is present. The test will continue even if the verify fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "text",
            "description": "The text to verify"
        }
    },
    "verifyTitle": {
        "name": "verify title",
        "description": "Soft assert the title of the current page contains the provided text. The test will continue even if the verify fails.",
        "target": {
            "name": "text",
            "description": "The text to verify"
        }
    },
    "verifyValue": {
        "name": "verify value",
        "description": "Soft assert the (whitespace-trimmed) value of an input \n        field (or anything else with a value parameter). For checkbox/radio \n        elements, the value will be \"on\" or \"off\" depending on whether the \n        element is checked or not. The test will continue even if the verify fails.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "text",
            "description": "An exact string match. Support for pattern matching is in the\n    works. See https://github.com/SeleniumHQ/selenium-ide/issues/141 for details"
        }
    },
    "waitForElementEditable": {
        "name": "wait for element editable",
        "description": "Wait for an element to be editable.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "wait time",
            "description": "The amount of time to wait (in milliseconds)"
        }
    },
    "waitForElementNotEditable": {
        "name": "wait for element not editable",
        "description": "Wait for an element to not be editable.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "wait time",
            "description": "The amount of time to wait (in milliseconds)"
        }
    },
    "waitForElementNotPresent": {
        "name": "wait for element not present",
        "description": "Wait for a target element to not be present on the page.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "wait time",
            "description": "The amount of time to wait (in milliseconds)"
        }
    },
    "waitForElementNotVisible": {
        "name": "wait for element not visible",
        "description": "Wait for a target element to not be visible on the page.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "wait time",
            "description": "The amount of time to wait (in milliseconds)"
        }
    },
    "waitForElementPresent": {
        "name": "wait for element present",
        "description": "Wait for a target element to be present on the page.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "wait time",
            "description": "The amount of time to wait (in milliseconds)"
        }
    },
    "waitForElementVisible": {
        "name": "wait for element visible",
        "description": "Wait for a target element to be visible on the page.",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "wait time",
            "description": "The amount of time to wait (in milliseconds)"
        }
    },
    "waitForText": {
        "name": "wait for text",
        "description": "Wait until the text of an element is present",
        "target": {
            "name": "locator",
            "description": "An element locator"
        },
        "value": {
            "name": "text",
            "description": "The text to verify"
        }
    },
    "while": {
        "name": "while",
        "description": "Create a loop that executes the proceeding commands \n        repeatedly for as long as the provided conditional expression is true.",
        "target": {
            "name": "conditional expression",
            "description": "JavaScript expression that returns a boolean result for use\n    in control flow commands"
        },
        "value": {
            "name": "loop limit",
            "description": "Maximum number of times a looping control flow command can execute to protect against infinite loops"
        }
    }
};

const commandMapChinese = {
    "acceptAlert": {
        "name": "accept alert",
        "description": "影响当前显示的Alert。此命令指示Selenium接受它。"
    },
    "acceptConfirmation": {
        "name": "accept confirmation",
        "description": "影响当前显示的Confirmation。此命令指示Selenium接受它。"
    },
    "addSelection": {
        "name": "add selection",
        "description": "将所选内容添加到多选元素中的选项集中。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "answerPrompt": {
        "name": "answer prompt",
        "description": "影响当前显示的Prompt。此命令指示Selenium为其提供指定的响应。",
        "target": {
            "name": "answer",
            "description": "弹出提示给出的响应"
        }
    },
    "assert": {
        "name": "assert",
        "description": "检查变量是否为期望值。变量的值将被转换为字符串进行比较。如果断言失败，测试将停止。",
        "target": {
            "name": "variable name",
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        },
        "value": {
            "name": "expected value",
            "description": "您期望变量包含的结果（例如，true、false或其他值）"
        }
    },
    "assertAlert": {
        "name": "assert alert",
        "description": "确认已使用提供的文本呈现Alert。如果断言失败，测试将停止。",
        "target": {
            "name": "alert text",
            "description": "要检查的文本"
        }
    },
    "assertChecked": {
        "name": "assert checked",
        "description": "确认确认目标元素状态为Checked。如果断言失败，测试将停止。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "assertConfirmation": {
        "name": "assert confirmation",
        "description": "确认已进行确认。如果断言失败，测试将停止。",
        "target": {
            "name": "alert text",
            "description": "要检查的文本"
        }
    },
    "assertEditable": {
        "name": "assert editable",
        "description": "确认目标元素是可编辑的。如果断言失败，测试将停止。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "assertElementPresent": {
        "name": "assert element present",
        "description": "确认目标元素存在于页面的某个位置。如果断言失败，测试将停止。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "assertElementNotPresent": {
        "name": "assert element not present",
        "description": "确认目标元素不存在于页面上的任何位置。如果断言失败，测试将停止。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "assertNotChecked": {
        "name": "assert not checked",
        "description": "确认目标元素状态为NotChecked。如果断言失败，测试将停止。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "assertNotEditable": {
        "name": "assert not editable",
        "description": "确认目标元素不可编辑。如果断言失败，测试将停止。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "assertNotSelectedValue": {
        "name": "assert not selected value",
        "description": "确认下拉元素中所选选项的值属性不包含所提供的值。如果断言失败，测试将停止。",
        "target": {
            "name": "select locator",
            "description": "标识下拉菜单的元素定位器"
        },
        "value": {
            "name": "text",
            "description": "完全匹配的字符串。对模式匹配的支持正在进行中。请前往https://github.com/SeleniumHQ/selenium-ide/issues/141了解详细信息"
        }
    },
    "assertNotText": {
        "name": "assert not text",
        "description": "确认元素的文本不包含提供的值。如果断言失败，测试将停止。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "text",
            "description": "完全匹配的字符串。对模式匹配的支持正在进行中。请前往https://github.com/SeleniumHQ/selenium-ide/issues/141了解详细信息"
        }
    },
    "assertPrompt": {
        "name": "assert prompt",
        "description": "确认已呈现JavaScript提示。如果断言失败，测试将停止。",
        "target": {
            "name": "alert text",
            "description": "要检查的文本"
        }
    },
    "assertSelectedValue": {
        "name": "assert selected value",
        "description": "确认下拉元素中所选选项的值属性包含所提供的值。如果断言失败，测试将停止。",
        "target": {
            "name": "select locator",
            "description": "标识下拉菜单的元素定位器"
        },
        "value": {
            "name": "text",
            "description": "完全匹配的字符串。对模式匹配的支持正在进行中。请前往https://github.com/SeleniumHQ/selenium-ide/issues/141了解详细信息"
        }
    },
    "assertSelectedLabel": {
        "name": "assert selected label",
        "description": "确认下拉元素中所选选项的标签包含所提供的值。如果断言失败，测试将停止。",
        "target": {
            "name": "select locator",
            "description": "标识下拉菜单的元素定位器"
        },
        "value": {
            "name": "text",
            "description": "完全匹配的字符串。对模式匹配的支持正在进行中。请前往https://github.com/SeleniumHQ/selenium-ide/issues/141了解详细信息"
        }
    },
    "assertText": {
        "name": "assert text",
        "description": "确认元素的文本包含提供的值。如果断言失败，测试将停止。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "text",
            "description": "完全匹配的字符串。对模式匹配的支持正在进行中。请前往https://github.com/SeleniumHQ/selenium-ide/issues/141了解详细信息"
        }
    },
    "assertTitle": {
        "name": "assert title",
        "description": "确认当前页面的标题包含所提供的文本。如果断言失败，测试将停止。",
        "target": {
            "name": "text",
            "description": "完全匹配的字符串。对模式匹配的支持正在进行中。请前往https://github.com/SeleniumHQ/selenium-ide/issues/141了解详细信息"
        }
    },
    "assertValue": {
        "name": "assert value",
        "description": "确认输入字段（或其他具有值参数的字段）的值。对于复选框/单选元素，值将为“on”或“off”，具体取决于是否选中该元素。如果断言失败，测试将停止。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "text",
            "description": "完全匹配的字符串。对模式匹配的支持正在进行中。请前往https://github.com/SeleniumHQ/selenium-ide/issues/141了解详细信息"
        }
    },
    "dismissConfirmation": {
        "name": "dismiss confirmation",
        "description": "影响当前显示的Confirmation。此命令指示Selenium取消它。"
    },
    "dismissPrompt": {
        "name": "dismiss prompt",
        "description": "影响当前显示的Prompt。此命令指示Selenium将其取消。"
    },
    "check": {
        "name": "check",
        "description": "选中切换按钮（复选框/单选框）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "click": {
        "name": "click",
        "description": "单击目标元素（例如，链接、按钮、复选框或单选按钮）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "clickAt": {
        "name": "click at",
        "description": "单击目标元素（例如，链接、按钮、复选框或单选按钮）。坐标是相对于目标元素的（例如，0,0是元素的左上角），主要用于检查传递到它们的效果，例如材material ripple效果。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "coord string",
            "description": "指定鼠标事件相对于从定位器中找到的元素的x，y位置（例如-10,20）"
        }
    },
    "close": {
        "name": "close",
        "description": "关闭当前窗口。没有必要关闭初始窗口，IDE将重新使用它；关闭它可能会对测试造成性能损失。"
    },
    "debugger": {
        "name": "debugger",
        "description": "中断执行并进入调试器"
    },
    "do": {
        "name": "do",
        "description": "创建一个至少执行一次正在进行的命令的循环。使用repeat-if命令终止分支。"
    },
    "doubleClick": {
        "name": "double click",
        "description": "双击某个元素（例如，链接、按钮、复选框或单选按钮）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "doubleClickAt": {
        "name": "double click at",
        "description": "双击目标元素（例如，链接、按钮、复选框或单选按钮）。坐标是相对于目标元素的（例如，0,0是元素的左上角），主要用于检查传递到它们上的效果，例如material ripple效果。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "coord string",
            "description": "指定鼠标事件相对于从定位器中找到的元素的x，y位置（例如-10,20）"
        }
    },
    "dragAndDropToObject": {
        "name": "drag and drop to object",
        "description": "拖动一个元素并将其放置在另一个元素上。",
        "target": {
            "name": "locator of object to be dragged",
            "description": "要拖动元素的定位器"
        },
        "value": {
            "name": "locator of drag destination object",
            "description": "元素的定位器，其位置（例如，其中最中心的像素）将是放置要拖动对象的定位器的点"
        }
    },
    "echo": {
        "name": "echo",
        "description": "打印指定的消息。对调试很有帮助",
        "target": {
            "name": "message",
            "description": "要打印的消息"
        }
    },
    "editContent": {
        "name": "edit content",
        "description": "将内容可编辑元素的值设置为键入的值。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "value",
            "description": "要键入的值"
        }
    },
    "else": {
        "name": "else",
        "description": "if块的一部分。当不满足if和/或else-if条件时，执行此分支中的命令。使用end命令终止分支。"
    },
    "elseIf": {
        "name": "else if",
        "description": "if块的一部分。如果不满足if条件，则执行此分支中的命令。使用end命令终止分支。",
        "target": {
            "name": "conditional expression",
            "description": "返回布尔结果以用于控制流命令的JavaScript表达式"
        }
    },
    "end": {
        "name": "end",
        "description": "终止if、while和times的控制流块。"
    },
    "executeScript": {
        "name": "execute script",
        "description": "在当前所选帧或窗口的上下文中执行JavaScript片段。脚本片段将作为匿名函数的主体执行。若要存储返回值，请使用“return”关键字并在值输入字段中提供变量名。",
        "target": {
            "name": "script",
            "description": "要运行的JavaScript代码片段"
        },
        "value": {
            "name": "variable name",
            "isOptional": true,
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        }
    },
    "executeAsyncScript": {
        "name": "execute async script",
        "description": "在当前所选帧或窗口的上下文中执行异步JavaScript片段。脚本片段将作为匿名函数的主体执行，并且必须返回Promise。如果使用“return”关键字，Promise结果将保存在变量上。",
        "target": {
            "name": "script",
            "description": "要运行的JavaScript代码片段"
        },
        "value": {
            "name": "variable name",
            "isOptional": true,
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        }
    },
    "forEach": {
        "name": "for each",
        "description": "创建一个循环，为给定集合中的每个项执行后续命令。",
        "target": {
            "name": "array variable name",
            "description": "包含JavaScript数组的变量名称"
        },
        "value": {
            "name": "iterator variable name",
            "description": "在循环控制流命令中迭代集合时使用的变量的名称（例如:for each）"
        }
    },
    "if": {
        "name": "if",
        "description": "在测试中创建一个条件分支。使用end命令终止分支。",
        "target": {
            "name": "conditional expression",
            "description": "返回布尔结果以用于控制流命令的JavaScript表达式"
        }
    },
    "mouseDown": {
        "name": "mouse down",
        "description": "模拟用户按下鼠标左键（尚未释放）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "mouseDownAt": {
        "name": "mouse down at",
        "description": "模拟用户在指定位置按下鼠标左键（尚未释放）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "coord string",
            "description": "指定鼠标事件相对于从定位器中找到的元素的x，y位置（例如-10,20）"
        }
    },
    "mouseMoveAt": {
        "name": "mouse move at",
        "description": "模拟用户在指定元素上按下鼠标按钮（尚未释放）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "coord string",
            "description": "指定鼠标事件相对于从定位器中找到的元素的x，y位置（例如-10,20）"
        }
    },
    "mouseOut": {
        "name": "mouse out",
        "description": "模拟用户将鼠标指针从指定元素移开。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "mouseOver": {
        "name": "mouse over",
        "description": "模拟用户将鼠标悬停在指定元素上。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "mouseUp": {
        "name": "mouse up",
        "description": "模拟用户释放鼠标按钮时发生的事件（例如，停止按住按钮）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "mouseUpAt": {
        "name": "mouse up at",
        "description": "模拟用户在指定位置释放鼠标按钮（例如，停止按住按钮）时发生的事件。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "coord string",
            "description": "指定鼠标事件相对于从定位器中找到的元素的x，y位置（例如-10,20）"
        }
    },
    "open": {
        "name": "open",
        "description": "打开一个URL，等待页面加载后再继续。接受相对路径和绝对路径。",
        "target": {
            "name": "url",
            "description": "要打开的URL（可以是相对路径或绝对路径）"
        }
    },
    "pause": {
        "name": "pause",
        "description": "等待指定的时间。",
        "target": {
            "name": "wait time",
            "description": "等待的时间（以毫秒为单位）"
        }
    },
    "removeSelection": {
        "name": "remove selection",
        "description": "使用选项定位器从多选元素中的所选选项集中删除所选内容。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "option",
            "description": "选项定位器，通常只是一个选项标签（例如“John Smith”）"
        }
    },
    "repeatIf": {
        "name": "repeat if",
        "description": "有条件地终止“do”控制流分支。如果所提供的条件表达式的结果为true，则会重新启动do循环。否则，它将结束循环。",
        "target": {
            "name": "conditional expression",
            "description": "返回布尔结果以用于控制流命令的JavaScript表达式"
        },
        "value": {
            "name": "loop limit",
            "description": "为防止无限循环，循环控制流命令可以执行的最大次数"
        }
    },
    "run": {
        "name": "run",
        "description": "从当前项目运行测试用例。",
        "target": {
            "name": "test case",
            "description": "项目中的测试用例名称"
        }
    },
    "runScript": {
        "name": "run script",
        "description": "在当前测试窗口的正文中创建一个新的“script”标记，并将指定的文本添加到命令正文中。请注意，这些脚本标记中抛出的JS异常不是由Selenium管理的，因此，如果脚本有可能抛出异常，您可能应该将脚本包装在try/catch块中。",
        "target": {
            "name": "script",
            "description": "要运行的JavaScript代码片段"
        }
    },
    "select": {
        "name": "select",
        "description": "使用选项定位器从下拉菜单中选择一个元素。选项定位器提供了指定select元素的不同方式（例如，label=、value=、id=、index=）。如果没有提供选项定位器前缀，将尝试在标签上进行匹配。",
        "target": {
            "name": "select locator",
            "description": "标识下拉菜单的元素定位器"
        },
        "value": {
            "name": "option",
            "description": "选项定位器，通常只是一个选项标签（例如“John Smith”）"
        }
    },
    "selectFrame": {
        "name": "select frame",
        "description": "在当前窗口中选择一个frame。您可以多次调用此命令来选择嵌套frame。注意：要选择父frame，请使用“relative=parent”作为定位器。要选择顶部frame，请使用“relative=top”。您也可以按索引编号0选择一个frame（例如，选择第一个“index=0”的frame，或选择第三个“index=2”的frame）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "selectWindow": {
        "name": "select window",
        "description": "使用窗口定位器选择弹出窗口。一旦选择了弹出窗口，所有命令都将转到该窗口。窗口定位器使用控制句柄来选择窗口。",
        "target": {
            "name": "window handle",
            "description": "表示特定页面（tab或window）的句柄"
        }
    },
    "sendKeys": {
        "name": "send keys",
        "description": "模拟指定元素上的击键事件，就像您逐键键入值一样。这模拟真实用户键入指定字符串中的每个字符；它还受到真实用户的限制，例如无法键入不可见的或只读的元素。这对于需要显式键事件的动态UI小部件（如自动完成组合框）非常有用。与简单的“type”命令不同，该命令将强制指定值直接进入页面，该命令不会替换现有内容。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "key sequence",
            "description": "一系列要键入的按键操作，可用于发送点击按键（例如 ${KEY_ENTER}）"
        }
    },
    "setSpeed": {
        "name": "set speed",
        "description": "设置执行速度（例如，设置每个Selenium操作之后的延迟的毫秒长度）。默认情况下，没有此类延迟，例如，延迟为0毫秒。此设置是全局设置，在更改之前将影响所有测试运行。",
        "target": {
            "name": "wait time",
            "description": "等待的时间（以毫秒为单位）"
        }
    },
    "setWindowSize": {
        "name": "set window size",
        "description": "设置浏览器的窗口大小，包括浏览器的界面。",
        "target": {
            "name": "resolution",
            "description": "使用“宽度x高度”指定窗口分辨率。（例如，1280x800）"
        }
    },
    "store": {
        "name": "store",
        "description": "将目标字符串保存为变量以便于重复使用。",
        "target": {
            "name": "text",
            "description": "要验证的文本"
        },
        "value": {
            "name": "variable name",
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        }
    },
    "storeAttribute": {
        "name": "store attribute",
        "description": "获取元素属性的值。属性的值可能因浏览器而异（例如，“style”属性）。",
        "target": {
            "name": "attribute locator",
            "description": "一个元素定位器，后跟一个@符号，然后是的名称\n属性，例如“foo@bar\""
        },
        "value": {
            "name": "variable name",
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        }
    },
    "storeElementCount": {
        "name": "store element count",
        "description": "获取与指定定位器匹配的节点数（例如，xpath=//table将给出table的数量）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "variable name",
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        }
    },
    "storeJson": {
        "name": "store json",
        "description": "将JSON保存在对象的变量上",
        "target": {
            "name": "json",
            "description": "JavaScript对象的字符串表示"
        },
        "value": {
            "name": "variable name",
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        }
    },
    "storeText": {
        "name": "store text",
        "description": "获取元素的文本并将其存储以供以后使用。这适用于任何包含文本的元素。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "variable name",
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        }
    },
    "storeTitle": {
        "name": "store title",
        "description": "获取当前页面的标题。",
        "target": {
            "name": "variable name",
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        }
    },
    "storeValue": {
        "name": "store value",
        "description": "获取元素的值并将其存储以供以后使用。这适用于任何输入类型的元素。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "variable name",
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        }
    },
    "storeWindowHandle": {
        "name": "store window handle",
        "description": "获取当前页面的句柄。",
        "target": {
            "name": "window handle",
            "description": "表示特定页面（tab或window）的句柄"
        }
    },
    "times": {
        "name": "times",
        "description": "创建一个循环，该循环执行前面的命令n次。",
        "target": {
            "name": "times",
            "description": "控制流循环在其块内执行命令的尝试次数"
        },
        "value": {
            "name": "loop limit",
            "description": "为防止无限循环，循环控制流命令可以执行的最大次数"
        }
    },
    "type": {
        "name": "type",
        "description": "设置输入字段的值，就像您键入的一样。也可以用于设置组合框、复选框等的值。在这些情况下，值应该是所选选项的值，而不是可见文本。仅限Chrome浏览器：如果给定文件路径，它将被上传到输入（对于type=file），注意：不支持XPath定位器。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "value",
            "description": "要键入的值"
        }
    },
    "uncheck": {
        "name": "uncheck",
        "description": "取消选中切换按钮（复选框/单选）。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "verify": {
        "name": "verify",
        "description": "软断言:变量是期望值。变量的值将被转换为字符串进行比较。即使验证失败，测试仍将继续。",
        "target": {
            "name": "variable name",
            "description": "变量的名称（不带括号）。用于将表达式的结果存储在或引用中以进行检查（例如，使用“assert”或“verify”）"
        },
        "value": {
            "name": "expected value",
            "description": "您期望变量包含的结果（例如，true、false或其他值）"
        }
    },
    "verifyChecked": {
        "name": "verify checked",
        "description": "软断言:切换按钮（复选框/单选框）已被选中。即使验证失败，测试仍将继续。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "verifyEditable": {
        "name": "verify editable",
        "description": "软断言:指定的输入元素是否可编辑（例如，未禁用）。即使验证失败，测试仍将继续。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "verifyElementPresent": {
        "name": "verify element present",
        "description": "软断言:指定的元素在页面上的某个位置。即使验证失败，测试仍将继续。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "verifyElementNotPresent": {
        "name": "verify element not present",
        "description": "软断言:指定的元素不在页面上的某个位置。即使验证失败，测试仍将继续。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "verifyNotChecked": {
        "name": "verify not checked",
        "description": "软断言:未选中切换按钮（复选框/单选框）。即使验证失败，测试仍将继续。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "verifyNotEditable": {
        "name": "verify not editable",
        "description": "软断言:指定的输入元素是否不可编辑（例如，禁用）。即使验证失败，测试仍将继续。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        }
    },
    "verifyNotSelectedValue": {
        "name": "verify not selected value",
        "description": "软断言:所需的元素尚未在选择菜单中由其选项属性选择。即使验证失败，测试仍将继续。",
        "target": {
            "name": "select locator",
            "description": "标识下拉菜单的元素定位器"
        },
        "value": {
            "name": "option",
            "description": "选项定位器，通常只是一个选项标签（例如“John Smith”）"
        }
    },
    "verifyNotText": {
        "name": "verify not text",
        "description": "软断言:元素的文本不存在。即使验证失败，测试仍将继续。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "text",
            "description": "要验证的文本"
        }
    },
    "verifySelectedLabel": {
        "name": "verify selected label",
        "description": "软断言:指定的select元素中所选选项的可见文本。即使验证失败，测试仍将继续。",
        "target": {
            "name": "select locator",
            "description": "标识下拉菜单的元素定位器"
        },
        "value": {
            "name": "text",
            "description": "完全匹配的字符串。对模式匹配的支持正在进行中。请前往https://github.com/SeleniumHQ/selenium-ide/issues/141了解详细信息"
        }
    },
    "verifySelectedValue": {
        "name": "verify selected value",
        "description": "软断言:所需元素已在选择菜单中由其选项属性选择。即使验证失败，测试仍将继续。",
        "target": {
            "name": "select locator",
            "description": "标识下拉菜单的元素定位器"
        },
        "value": {
            "name": "option",
            "description": "选项定位器，通常只是一个选项标签（例如“John Smith”）"
        }
    },
    "verifyText": {
        "name": "verify text",
        "description": "软断言:元素的文本存在。即使验证失败，测试仍将继续。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "text",
            "description": "要验证的文本"
        }
    },
    "verifyTitle": {
        "name": "verify title",
        "description": "软断言:当前页面的标题包含所提供的文本。即使验证失败，测试仍将继续。",
        "target": {
            "name": "text",
            "description": "要验证的文本"
        }
    },
    "verifyValue": {
        "name": "verify value",
        "description": "软断言:输入字段（或任何其他具有值参数的字段）的值（过滤了'空'）。对于checkbox/radio元素，值将为“on”或“off”，具体取决于是否选中该元素。即使验证失败，测试仍将继续。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "text",
            "description": "完全匹配的字符串。对模式匹配的支持正在进行中。请前往https://github.com/SeleniumHQ/selenium-ide/issues/141了解详细信息"
        }
    },
    "waitForElementEditable": {
        "name": "wait for element editable",
        "description": "等待元素可编辑。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "wait time",
            "description": "等待的时间（以毫秒为单位）"
        }
    },
    "waitForElementNotEditable": {
        "name": "wait for element not editable",
        "description": "等待元素不可编辑。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "wait time",
            "description": "等待的时间（以毫秒为单位）"
        }
    },
    "waitForElementNotPresent": {
        "name": "wait for element not present",
        "description": "等待页面上不存在目标元素。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "wait time",
            "description": "等待的时间（以毫秒为单位）"
        }
    },
    "waitForElementNotVisible": {
        "name": "wait for element not visible",
        "description": "等待目标元素在页面上不可见。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "wait time",
            "description": "等待的时间（以毫秒为单位）"
        }
    },
    "waitForElementPresent": {
        "name": "wait for element present",
        "description": "等待目标元素出现在页面上。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "wait time",
            "description": "等待的时间（以毫秒为单位）"
        }
    },
    "waitForElementVisible": {
        "name": "wait for element visible",
        "description": "等待目标元素在页面上可见。",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "wait time",
            "description": "等待的时间（以毫秒为单位）"
        }
    },
    "waitForText": {
        "name": "wait for text",
        "description": "等待元素的文本出现",
        "target": {
            "name": "locator",
            "description": "元素定位器"
        },
        "value": {
            "name": "text",
            "description": "要验证的文本"
        }
    },
    "while": {
        "name": "while",
        "description": "创建一个循环，只要提供的条件表达式为true，该循环就会重复执行前面的命令。",
        "target": {
            "name": "conditional expression",
            "description": "返回布尔结果以用于控制流命令的JavaScript表达式"
        },
        "value": {
            "name": "loop limit",
            "description": "为防止无限循环，循环控制流命令可以执行的最大次数"
        }
    }
};

export const chineseMap = {
    windowTab: windowTabChinese,
    electronMenuTree: electronMenuTreeChinese,
    fileMenuTree: fileMenuTreeChinese,
    editMenuTree: editMenuTreeChinese,
    viewMenuTree: viewMenuTreeChinese,
    helpMenuTree: helpMenuTreeChinese,
    mainMenu: maiMenuChinese,
    testsTab: testsTabChinese,
    suitesTab: suitesTabChinese,
    configTab: configTabChinese,
    systemConfig: systemConfigChinese,
    projectConfig: projectConfigChinese,
    outPutConfig: outPutConfigChinese,
    splash: splashChinese,
    playback: playbackChinese,
    testCore: testCoreChinese,
    commandMap: commandMapChinese
};

export const englishMap = {
    windowTab: windowTabEnglish,
    electronMenuTree: electronMenuTreeEnglish,
    fileMenuTree: fileMenuTreeEnglish,
    editMenuTree: editMenuTreeEnglish,
    viewMenuTree: viewMenuTreeEnglish,
    helpMenuTree: helpMenuTreeEnglish,
    mainMenu: maiMenuEnglish,
    testsTab: testsTabEnglish,
    suitesTab: suitesTabEnglish,
    configTab: configTabEnglish,
    systemConfig: systemConfigEnglish,
    projectConfig: projectConfigEnglish,
    outPutConfig: outPutConfigEnglish,
    splash: splashEnglish,
    playback: playbackEnglish,
    testCore: testCoreEnglish,
    commandMap: commandMapEnglish
};
