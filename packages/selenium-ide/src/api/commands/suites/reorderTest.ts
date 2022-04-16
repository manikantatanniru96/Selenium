import { SuiteShape } from '@seleniumhq/side-model'
import update from 'lodash/fp/update'
import browserHandler from 'browser/api/classes/Handler'
import mainHandler, { passthrough } from 'main/api/classes/Handler'
import { Mutator } from 'api/types'
import { hasID } from 'api/helpers/hasID'

export type Shape = (
  _suiteID: string,
  _testID: string,
  _newIndex: number
) => Promise<void>

export const mutator: Mutator<Shape> = (
  session,
  { params: [suiteID, testID, newIndex] }
) =>
  update(
    'project.suites',
    (suites: SuiteShape[]) => {
      const suiteIndex = suites.findIndex(hasID(suiteID))
      return update(`${suiteIndex}.tests`, (tests: SuiteShape['tests']) => {
        const newTests = tests.filter((id) => id !== testID)
        newTests.splice(newIndex, 0, testID)
        return newTests
      })
    },
    session
  )

export const browser = browserHandler<Shape>()

export const main = mainHandler<Shape>(passthrough)
