import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import AppWrapper from 'browser/components/AppWrapper'
import React, { useEffect, useState } from 'react'
import renderWhenReady from 'browser/helpers/renderWhenReady'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'

const ProjectEditor = () => {
  const [logPath, setLogPath] = useState<string>('...')
  const [recentProjects, setRecentProjects] = useState<string[]>([])
  const [language, setLanguage] = useState<string>('en')
  const [languageMap, setLanguageMap] = useState<any>({
    splash: {
      present: 'Welcome to the Selenium IDE client',
      logPath: 'Your log file path:',
      openNotice: 'You can load or create one project',
      loadProject: 'load project',
      createProject: 'create project',
      openRecent: 'open recent:',
      languageSelect: 'choose language',
    },
  })

  useEffect(() => {
    window.sideAPI.system.getLogPath().then(setLogPath)
    window.sideAPI.projects.getRecent().then(setRecentProjects)
    window.sideAPI.system.getLanguage().then(setLanguage)
    window.sideAPI.system.getLanguageMap().then((result) => {
      setLanguageMap(result)
    })
  }, [])
  const loadProject = async () => {
    const response = await window.sideAPI.dialogs.open()
    if (response.canceled) return
    await window.sideAPI.projects.load(response.filePaths[0])
  }
  const newProject = async () => {
    await window.sideAPI.projects.new()
  }

  return (
    <AppWrapper>
      <Grid className="centered pt-4" container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">{languageMap.splash.present}</Typography>
          <Typography variant="caption">
            {languageMap.splash.logPath} "{logPath}"
          </Typography>
          <Typography variant="subtitle1">
            {languageMap.splash.openNotice}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button data-load-project onClick={loadProject} variant="contained">
            {languageMap.splash.loadProject}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button data-new-project onClick={newProject} variant="outlined">
            {languageMap.splash.createProject}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{languageMap.splash.recentOpen}</Typography>
          <List dense>
            {recentProjects.map((filepath, index) => (
              <ListItem
                disablePadding
                key={index}
                onClick={() => {
                  window.sideAPI.projects.load(filepath).then(() => {
                    window.sideAPI.projects.getRecent().then(setRecentProjects)
                  })
                }}
              >
                <ListItemButton>
                  <ListItemText primary={filepath} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              {languageMap.splash.languageSelect}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={language}
              onChange={async (e: any) => {
                // 设置语言类型
                await setLanguage(e.target.value)
                // 修改config.json中的数据
                await window.sideAPI.system.setLanguage(e.target.value)
                // 获取语言字典
                await window.sideAPI.system
                  .getLanguageMap()
                  .then(setLanguageMap)
              }}
            >
              <FormControlLabel
                value="en"
                control={<Radio />}
                label={language === 'en' ? 'english' : '英文'}
              />
              <FormControlLabel
                value="cn"
                control={<Radio />}
                label={language === 'en' ? 'chinese' : '中文'}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </AppWrapper>
  )
}

renderWhenReady(ProjectEditor)
