import React from 'react'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useStatusBarHeight } from '~/src/libs/status-bar'
import { tw } from '~/src/libs/tailwind'
import Header from '~/src/components/app/Header'

const PageLayout = ({ title, children }) => {
  const height = useStatusBarHeight()

  return <SafeAreaView style={{ ...tw('h-full'), paddingTop: height }}>
    <Header title={title} />
    {children}
    <StatusBar style="black" />
  </SafeAreaView>
}

export default PageLayout
