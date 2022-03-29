import React from 'react'
import { NativeModules, StatusBarIOS, Platform, StatusBar, LogBox } from 'react-native'

LogBox.ignoreLogs(['StatusBarIOS has been merged with StatusBar and will be removed in a future release. Use StatusBar for mutating the status bar'])
export const useStatusBarHeight = () => {
  const { StatusBarManager } = NativeModules
  // Initialize w/ currentHeight b/c StatusBar.currentHeight works properly on android on Android
  const [height, setHeight] = React.useState(StatusBar.currentHeight || 0)

  React.useEffect(() => {
    if (Platform.OS !== 'ios') return

    StatusBarManager.getHeight(({ height }) => {
      setHeight(height)
    })
    const listener = StatusBarIOS.addListener(
      'statusBarFrameWillChange',
      data => {
        setHeight(data?.statusBarData?.frame?.height ?? 0)
      }
    )

    return () => listener.remove()
  }, [])

  return height
}
