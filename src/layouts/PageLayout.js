import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useStatusBarHeight } from '~/src/libs/status-bar'
import { tw } from '~/src/libs/tailwind'
import Header from '~/src/components/app/Header'
import Footer from '~/src/components/app/Footer'

const PageLayout = ({ title, children }) => {
  const statusHeight = useStatusBarHeight()

  return <SafeAreaView style={{ ...tw('flex h-full'), paddingTop: statusHeight }}>
    <Header title={title} />
    <View style={tw('flex-shrink flex-grow px-5')}>
      {children}
    </View>
    <Footer />
    <StatusBar style="black" />
  </SafeAreaView>
}

export default PageLayout
