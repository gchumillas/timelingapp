import React from 'react'
import { View, Text } from 'react-native'
import { tw, getColor } from '~/src/libs/tailwind'
import ExploreIcon from '~/assets/icons/explore.svg'
import HeartIcon from '~/assets/icons/heart.svg'
import PersonIcon from '~/assets/icons/person.svg'
import PlusIcon from '~/assets/icons/plus.svg'

const Footer = _ => {
  return <View style={tw('flex flex-row justify-between items-center border-t border-gray-200 pt-4 px-6')}>
    <View style={tw('flex items-center')}>
      <ExploreIcon width={30} height={30} color={getColor('gray-900')} />
      <Text style={tw('text-xs')}>Explore</Text>
    </View>
    <View style={tw('flex items-center')}>
      <PlusIcon width={30} height={30} color={getColor('gray-400')} />
      <Text style={tw('text-xs text-gray-400')}>New Event</Text>
    </View>
    <View style={tw('flex items-center')}>
      <HeartIcon width={30} height={30} color={getColor('gray-400')} />
      <Text style={tw('text-xs text-gray-400')}>Event</Text>
    </View>
    <View style={tw('flex items-center')}>
      <PersonIcon width={30} height={30} color={getColor('gray-400')} />
      <Text style={tw('text-xs text-gray-400')}>Profile</Text>
    </View>
  </View>
}

export default Footer
