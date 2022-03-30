import React from 'react'
import { View, Text } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Footer = _ => {
  return <View style={tw('flex flex-row justify-around items-center')}>
    <Text>Explore</Text>
    <Text>New Event</Text>
    <Text>Event</Text>
    <Text>Profile</Text>
  </View>
}

export default Footer
