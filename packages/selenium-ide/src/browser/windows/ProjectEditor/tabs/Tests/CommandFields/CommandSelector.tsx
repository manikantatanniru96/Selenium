import { CodeOff, HelpCenter, OpenInNew } from "@mui/icons-material";
import { Autocomplete } from "@mui/material";
import { FormControl } from "@mui/material";
import { TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import React, { FC, useEffect, useMemo, useState } from "react";
import { setField, updateACField } from "./utils";
import { CommandSelectorProps } from "../types";

const setCommandFactory = setField("command");
const setOpensWindowFactory = setField<boolean>("opensWindow");
const updateCommand = updateACField("command");
const CommandSelector: FC<CommandSelectorProps> = ({
                                                     command,
                                                     commands,
                                                     disabled,
                                                     isDisabled,
                                                     testID
                                                   }) => {
  const [languageMap, setLanguageMap] = useState<any>({
    testCore: {
      stepCommand: "Command",
      enableCommand: "Enable this command",
      disableCommand: "Disable this command",
      openNewWindow: "Opens a new window",
      notOpenNewWindow: "Does not open a new window"
    },
    commandMap: {
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
    }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });
  }, []);
  const commandsList = useMemo(
    () =>
      Object.entries(commands)
        .map(([id, { name }]) => ({ id, name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    []
  );
  if (commandsList.length === 0) {
    return null;
  }
  // const commandData = commands[command.command];
  const commandData = languageMap.commandMap ? languageMap.commandMap[command.command] : commands[command.command];
  const setCommand = setCommandFactory(testID, command.id);
  const setOpensWindow = setOpensWindowFactory(testID, command.id);
  const commandOptions = commandsList.map((item) => {
    return { label: item.name, id: item.id };
  });

  return (
    <>
      <FormControl className="flex flex-row">
        <Autocomplete
          id="command-selector"
          className="flex-1"
          disabled={disabled}
          onChange={updateCommand(testID, command.id)}
          getOptionLabel={(option) => option.label}
          options={commandOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                ["data-overridearrowkeys"]: true
              }}
              label={languageMap.testCore.stepCommand}
            />
          )}
          size="small"
          value={commandOptions.find((entry) => entry.id === command.command)}
          isOptionEqualToValue={(option, value) => option.id === value.id}
        />

        <Tooltip
          className="flex-initial ms-4 my-auto"
          title={
            command.opensWindow ? languageMap.testCore.openNewWindow : languageMap.testCore.notOpenNewWindow}
          placement="top-end"
        >
          <IconButton
            disabled={disabled}
            onClick={() => setOpensWindow(!command.opensWindow)}
          >
            <OpenInNew color={command.opensWindow ? "info" : "inherit"} />
          </IconButton>
        </Tooltip>
        <Tooltip
          className="flex-initial my-auto"
          title={isDisabled ? languageMap.testCore.enableCommand : languageMap.testCore.disableCommand}
          placement="top-end"
        >
          <IconButton
            disabled={disabled}
            onClick={() =>
              setCommand(isDisabled ? command.command : `//${command.command}`)
            }
          >
            <CodeOff color={isDisabled ? "info" : "inherit"} />
          </IconButton>
        </Tooltip>
        <Tooltip
          className="flex-initial mx-2 my-auto"
          title={commandData.description}
          placement="top-end"
        >
          <HelpCenter />
        </Tooltip>
      </FormControl>
    </>
  );
};

export default CommandSelector;
