import React from 'react'
import { View, Text } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Header = ({ title }) => {
  return <View style={tw('flex items-center p-5')}>
    <Text>{title}</Text>
  </View>
}

export default Header
