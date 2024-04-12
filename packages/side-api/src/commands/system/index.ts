import type { Shape as Crash } from './crash'
import type { Shape as GetLogPath } from './getLogPath'
import type { Shape as OnLog } from './onLog'
import type { Shape as Quit } from './quit'
import type { Shape as GetLanguage } from './getLanguage'
import type { Shape as SetLanguage } from './setLanguage'
import type { Shape as GetLanguageMap } from './getLanguageMap'

import * as crash from './crash'
import * as getLogPath from './getLogPath'
import * as onLog from './onLog'
import * as quit from './quit'
import * as getLanguage from './getLanguage'
import * as setLanguage from './setLanguage'
import * as getLanguageMap from './getLanguageMap'

export const commands = {
  crash,
  getLogPath,
  onLog,
  quit,
  getLanguage,
  setLanguage,
  getLanguageMap,
}

/**
 * Allows for the IDE process to be exited gracefully or non-gracefully.
 */
export type Shape = {
  crash: Crash
  getLogPath: GetLogPath
  onLog: OnLog
  quit: Quit
  getLanguage: GetLanguage
  setLanguage: SetLanguage
  getLanguageMap: GetLanguageMap
}
