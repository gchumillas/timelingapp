import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import { tw } from '~/src/libs/tailwind'
import Link from '~/src/components/Link'
import images from '~/data/images'
import PlaceIcon from '~/assets/icons/place.svg'
import HeartIcon from '~/assets/icons/heart.svg'

const Thumbnail = ({ id, title, userName, location, image, featured }) => {
  return <View style={{ ...tw('w-1/2 pb-4 px-2') }}>
    <Link to={`/events/${id}`}>
      <View style={{ ...tw('relative border-1/2 border-gray-400 rounded-lg overflow-hidden'), aspectRatio: 4 / 5 }}>
        {/* background image */}
        <Image source={images[image]} style={{ ...tw('absolute w-full h-full rounded-lg border-2'), borderColor: 'white' }} resizeMode="cover" />
        {/* rest of elements */}
        {featured && <View style={tw('absolute top-3 left-3 bg-red-300 rounded-full px-2 py-0.5')}>
          <Text style={tw('uppercase text-xs')}>New</Text>
        </View>}
        <Pressable style={tw('absolute top-3 right-3')}>
          <HeartIcon with={20} height={20} color="white" />
        </Pressable>
        <View style={tw('absolute bottom-3 left-3')}>
          <Text style={tw('text-white text-lg font-bold')}>{title}</Text>
          <Text style={tw('text-white mb-1')}>With {userName}</Text>
          <View style={tw('flex flex-row items-center -ml-1.5')}>
            <PlaceIcon height={18} color="white" />
            <Text style={tw('text-white text-xs')}>{location}</Text>
          </View>
        </View>
      </View>
    </Link>
  </View>
}

export default Thumbnail
