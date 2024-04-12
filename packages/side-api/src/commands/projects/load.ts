import { loadingID } from '../../constants/loadingID'
import { CoreSessionData, Mutator } from '../../types/base'

/**
 * Loads the project editor for a path
 */
export type Shape = (filepath: string) => Promise<CoreSessionData | null>

export const mutator: Mutator<Shape> = (session, { result }) => {
  if (!result) {
    console.info('!result:' + session)
    return session
  }
  // result.state = defaultState
  const { project, state } = result
  if (state) {
    console.info('state:' + JSON.stringify(result))
    return result
  }
  const activeTestID = project.tests[0]?.id ?? loadingID
  console.info(
    'target:' +
      { project, state: { ...session.state, activeSuiteID: '', activeTestID } }
  )
  return {
    project,
    state: {
      ...session.state,
      activeSuiteID: '',
      activeTestID,
    },
  }
}
