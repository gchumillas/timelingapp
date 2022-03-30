import React from 'react'
import { Text, View, Image } from 'react-native'
import { tw } from '~/src/libs/tailwind'
import Link from '~/src/components/Link'
import images from '~/data/images'
import PlaceIcon from '~/assets/icons/place.svg'

const Thumbnail = ({ id, title, userName, location, image }) => {
  return <View style={{ ...tw('w-1/2 pb-4 px-2') }}>
    <Link to={`/events/${id}`}>
      <View style={{ ...tw('relative border-1/2 border-gray-400 rounded-lg overflow-hidden'), aspectRatio: 4 / 5 }}>
        <Image source={images[image]} style={{ ...tw('absolute w-full h-full rounded-lg border-2'), borderColor: 'white' }} resizeMode="cover" />
        <View style={tw('absolute bottom-2 left-2')}>
          <Text style={tw('text-white text-lg font-bold')}>{title}</Text>
          <Text style={tw('text-white mb-0.5')}>With {userName}</Text>
          <View style={tw('flex flex-row items-center -ml-0.5')}>
            <PlaceIcon width={18} height={18} color="white" />
            <Text style={tw('text-white text-xs')}>{location}</Text>
          </View>
        </View>
      </View>
    </Link>
  </View>
}

export default Thumbnail
