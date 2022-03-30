import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { tw, getColor } from '~/src/libs/tailwind'
import SettingsIcon from '~/assets/icons/settings.svg'

const Header = ({ title }) => {
  return <View style={tw('relative flex items-center p-5')}>
    <Text style={tw('text-lg font-semibold')}>{title}</Text>
    <Pressable style={{ ...tw('absolute right-5 inset-y-0 justify-center') }}>
      <SettingsIcon width={20} height={20} color={getColor('gray-900')} />
    </Pressable>
  </View>
}

export default Header
