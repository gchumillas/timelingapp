import React from 'react'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useStatusBarHeight } from '~/src/libs/status-bar'
import { tw } from '~/src/libs/tailwind'

const PageLayout = ({ children }) => {
  const height = useStatusBarHeight()

  return <SafeAreaView style={{ ...tw('h-full'), paddingTop: height }}>
    {children}
    <StatusBar style="black" />
  </SafeAreaView>
}

export default PageLayout
