import {Typography} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import {Browser} from '@seleniumhq/get-driver'
import {VerboseBoolean} from '@seleniumhq/side-api'
import {BrowserInfo, BrowsersInfo} from 'main/types'
import React, {useEffect, useState} from 'react'
import Button from "@mui/material/Button";

/****************以下为我新增*****************/
const ElectronVersion = require('electron/package.json').version
const ourElectronBrowserInfo: BrowserInfo = {
    browser: 'electron',
    useBidi: false,
    version: ElectronVersion,
}
/****************以上为我新增*****************/


const browserToString = (browser: BrowserInfo): string =>
    `${browser.browser}|${browser.version}`

const browserFromString = (browserString: string): BrowserInfo => {
    const [browser, version] = browserString.split('|')
    return {browser: browser as Browser, version}
}

const DriverSelector = () => {
    const [browserInfo, setBrowserInfo] = useState<BrowsersInfo>({
        browsers: [],
        selected: {browser: 'chrome', useBidi: false, version: ''},
    })
    const [languageMap, setLanguageMap] = useState<any>({
        systemConfig: {
            bidi: 'Use Bidi',
            bidiHelper: 'Bidi settings (Experimental / Non working)',
            playbackBrowser: 'Selected Playback Browser',
            restartDriver:'restart driver'
        },
    })

    useEffect(() => {
        window.sideAPI.driver.listBrowsers().then(async (info) => {
            setBrowserInfo(info)
        })
        window.sideAPI.system.getLanguageMap().then((result) => {
            setLanguageMap(result)
        })
    }, [])
    const processBrowserSelection = async (browser: BrowserInfo) => {
        /****************以下为我新增*****************/
        browser = browser.useBidi ? browser : ourElectronBrowserInfo
        /****************以上为我新增*****************/
        console.log('Setting browser', browser)
        setBrowserInfo((info) => ({browsers: info!.browsers, selected: null}))
        await window.sideAPI.driver.download(browser)
        await window.sideAPI.driver.stopProcess()
        await window.sideAPI.driver.startProcess(browser)
        await window.sideAPI.driver.selectBrowser(browser)
        setBrowserInfo((info) => ({
            browsers: info!.browsers,
            selected: browser,
        }))
    }
    const processBidiSelection = async (useBidi: boolean) => {
        const browser = {
            ...browserInfo.selected!,
            useBidi,
        }
        processBrowserSelection(browser)
    }
    const selectBrowser = async (e: SelectChangeEvent<string>) => {
        const browser = {
            ...browserFromString(e.target.value as string),
            useBidi: Boolean(browserInfo?.selected?.useBidi ?? false),
        }
        processBrowserSelection(browser)
    }
    return (
        <>
            <Typography variant="caption">
                {languageMap.systemConfig.bidiHelper}
            </Typography>
            <FormControl>
                <InputLabel id="useBidi">{languageMap.systemConfig.bidi}</InputLabel>
                <Select
                    id="useBidi"
                    label={languageMap.systemConfig.bidi}
                    name="useBidi"
                    value={browserInfo.selected?.useBidi ? 'Yes' : 'No'}
                    onChange={(e) => {
                        const value = e.target.value as VerboseBoolean
                        const bool = value === 'Yes'
                        processBidiSelection(bool)
                    }}
                >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="browser-label">
                    {languageMap.systemConfig.playbackBrowser}
                </InputLabel>
                {browserInfo.selected ? (
                    <Select
                        disabled={!browserInfo.selected?.useBidi}
                        label="Selected Playback Browser"
                        labelId="browser-label"
                        onChange={selectBrowser}
                        placeholder="Please select a browser"
                        value={!browserInfo.selected?.useBidi || browserInfo.selected?.browser === 'electron' ? browserToString(ourElectronBrowserInfo) : browserToString(browserInfo.selected)}
                    >
                        {browserInfo.browsers.map((browser, index) => (
                            <MenuItem key={index} value={browserToString(browser)}>
                                {browser.browser} - {browser.version}
                            </MenuItem>
                        ))}
                    </Select>
                ) : (
                    <Select
                        disabled
                        label="Selected Playback Browser"
                        labelId="browser-label"
                        onChange={selectBrowser}
                        placeholder="Please select a browser"
                        value={browserToString(ourElectronBrowserInfo)}
                    >
                        <MenuItem value="">
                            <em>Loading...</em>
                        </MenuItem>
                    </Select>
                )}
            </FormControl>
                <Button
                    color="secondary"
                    size="small"
                    onClick={()=>{
                        processBrowserSelection(browserInfo.selected!)
                    }
                }
                >
                    {languageMap.systemConfig.restartDriver}
                </Button>
        </>
    )
}

export default DriverSelector
