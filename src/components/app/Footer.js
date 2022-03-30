import React from 'react'
import { View, Text } from 'react-native'
import { tw } from '~/src/libs/tailwind'
import ExploreIcon from '~/assets/icons/explore.svg'
import HeartIcon from '~/assets/icons/heart.svg'
import PersonIcon from '~/assets/icons/person.svg'
import PlusIcon from '~/assets/icons/plus.svg'

const Footer = _ => {
  return <View style={tw('flex flex-row justify-around items-center')}>
    <View>
      {/* TODO: create Icon component */}
      {/* TODO: add color property */}
      <ExploreIcon width={30} height={30} />
      <Text>Explore</Text>
    </View>
    <View>
      <PlusIcon width={30} height={30} />
      <Text>New Event</Text>
    </View>
    <View>
      <HeartIcon width={30} height={30} />
      <Text>Event</Text>
    </View>
    <View>
      <PersonIcon width={30} height={30} />
      <Text>Profile</Text>
    </View>
  </View>
}

export default Footer
