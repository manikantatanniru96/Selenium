import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React, {FC} from 'react'
import ProjectSettings from './ProjectSettings'
import SystemSettings from './SystemSettings'
import {SIDEMainProps} from '../../../../components/types'
// import AppBar from '../../../../components/AppBar'
import SettingsTabs from './SettingTabs'
import {ProjectShape} from "@seleniumhq/side-model";
import {StateShape} from "@seleniumhq/side-api";
import OutPutSettings from "./OutPutSettings";


/**************顶部配置tab***************/
export interface MiniProjectShape {
    id: string
    name: string
}


export function subTab(project: ProjectShape, state: StateShape) {
    let element = <ProjectSettings project={project}/>
    if (state.editor.configSettingsGroup === 'project') {
        element = <ProjectSettings project={project}/>
    } else if (state.editor.configSettingsGroup === 'system') {
        element = <SystemSettings state={state}/>
    } else if (state.editor.configSettingsGroup === 'outPut') {
        element = <OutPutSettings outPut={project}/>
    }
    return element
}

const SettingsWrapper: FC<Pick<SIDEMainProps, 'session'>> = ({
                                                                 session: {project, state},
                                                             }) => (subTab(project, state))

// const ProjectTab: React.FC<
//     Pick<SIDEMainProps, 'session' | 'setTab' | 'tab'>
// > = ({session, setTab, tab}) => (
//     <Box className="fill flex flex-col">
//         <Box className="flex-initial">
//             <AppBar session={session} setTab={setTab} tab={tab}/>
//         </Box>
//         <Paper className="flex-initial z-1" elevation={1} square>
//             <SettingsTabs session={session}/>
//         </Paper>
//         <Box className="flex-1 flex-col">
//             <Paper elevation={1} id="project-editor" square>
//                 <SettingsWrapper session={session}/>
//             </Paper>
//         </Box>
//     </Box>
// )

const ProjectTab: React.FC<
  Pick<SIDEMainProps, 'session' | 'setTab' | 'tab'>
> = ({session}) => (
  <Box className="fill flex flex-col">
    {/*<Box className="flex-initial">*/}
    {/*  <AppBar session={session} setTab={setTab} tab={tab}/>*/}
    {/*</Box>*/}
    <Paper className="flex-initial z-1" elevation={1} square>
      <SettingsTabs session={session}/>
    </Paper>
    <Box className="flex-1 flex-col">
      <Paper elevation={1} id="project-editor" square>
        <SettingsWrapper session={session}/>
      </Paper>
    </Box>
  </Box>
)

export default ProjectTab
