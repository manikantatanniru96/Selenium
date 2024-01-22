import AppWrapper from 'browser/components/AppWrapper'
import renderWhenReady from 'browser/helpers/renderWhenReady'
import subscribeToSession from 'browser/helpers/subscribeToSession'
import React from 'react'
import {
  ImperativePanelGroupHandle,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels'
import SIDELogger from 'browser/components/Logger'
import PlaybackControls from 'browser/components/PlaybackControls'
import ProjectPlaybackWindow from 'browser/components/PlaybackPanel'
import ProjectEditor from 'browser/components/ProjectEditor'

const usePanelGroup = (id: string) => {
  const [ready, setReady] = React.useState(false)
  const ref = React.useRef<null | ImperativePanelGroupHandle>(null)
  React.useEffect(() => {
    if (!ref.current) return
    window.sideAPI.resizablePanels.getPanelGroup(id).then((values) => {
      ref.current?.setLayout(values)
      setReady(true)
    })
  }, [ref])
  const onLayout = React.useCallback(
    (sizes: number[]) => {
      if (!ready) return
      window.sideAPI.resizablePanels.setPanelGroup(id, sizes)
    },
    [ready]
  )
  return {
    ref,
    onLayout,
  }
}

const ProjectMainWindow = () => {
  const session = subscribeToSession()
  return (
    <AppWrapper>
      <PanelGroup
        direction="horizontal"
        id="editor-playback"
        {...usePanelGroup('editor-playback')}
      >
        <Panel id="editor-panel" order={1}>
          <ProjectEditor session={session} />
        </Panel>
        <PanelResizeHandle className="resize-bar" id="h-resize" />
        <Panel id="playback-logger-panel" order={2}>
          <PanelGroup
            direction="vertical"
            id="playback-logger"
            {...usePanelGroup('playback-logger')}
          >
            <PlaybackControls session={session} />
            <Panel id="playback-panel" order={4}>
              <ProjectPlaybackWindow />
            </Panel>
            <PanelResizeHandle
              className="resize-bar"
              dir="vertical"
              id="playback-logger-resize"
            />
            <Panel className="pos-rel" id="logger-panel" order={5}>
              <SIDELogger />
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </AppWrapper>
  )
}

renderWhenReady(ProjectMainWindow)
