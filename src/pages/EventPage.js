import React from 'react'
import { SafeAreaView, View, Image, Text, Pressable } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import { DateTime } from 'luxon'
import { tw, getColor } from '~/src/libs/tailwind'
import { getEvent } from '~/src/providers/events'
import ModalLayout from '~/src/layouts/ModalLayout'
import LeftNavIcon from '~/assets/icons/left-nav.svg'
import EllispsisIcon from '~/assets/icons/ellipsis.svg'
import PlaceIcon from '~/assets/icons/place.svg'
import images from '~/data/images'

const EventPage = _ => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [event, setEvent] = React.useState()
  const doClose = _ => navigate('/events')

  const loadEvent = async _ => {
    const event = await getEvent(id)
    setEvent(event)
  }

  React.useEffect(_ => {
    loadEvent()
  }, [id])

  return <ModalLayout>
    <View style={tw('flex h-full')}>
      <View style={{ ...tw('relative bg-gray-400'), aspectRatio: 4 / 3 }}>
        {/* background image */}
        {event && <Image source={images[event.image]} style={{ ...tw('absolute w-full h-full'), borderColor: 'white' }} resizeMode="cover" />}
        {/* rest of elements */}
        <SafeAreaView style={tw('h-full')}>
          <View style={tw('h-full flex justify-between pt-3')}>
            <View style={tw('mx-3 flex flex-row items-center justify-between')}>
              <Pressable onPress={doClose}>
                <LeftNavIcon width={30} height={30} color="white" />
              </Pressable>
              <Pressable>
                <EllispsisIcon width={30} height={30} color="white" />
              </Pressable>
            </View>
            <View style={tw('flex flex-row items-center justify-between py-4 px-6')}>
              <Text style={tw('text-xl text-white font-semibold')}>
                {event?.userName} {event?.age}
              </Text>
              <Text style={tw('text-base text-white underline')}>
                View Profile
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
      <View style={tw('bg-red-100 flex items-center py-7 px-7')}>
        <Text style={tw('text-3xl font-semibold mb-3')}>{event?.title}</Text>
        <Text style={tw('text-xl font-semibold mb-4')}>{event?.date.toLocaleString(DateTime.DATETIME_MED)}</Text>
        <Text style={tw('mb-4 text-center')}>{event?.description}</Text>
        <View style={tw('flex flex-row')}>
          <PlaceIcon height={18} color={getColor('gray-900')} />
          <Text style={tw('text-center')}>{event?.location}</Text>
        </View>
      </View>
      <View style={tw('relative flex-grow')}>
        {/* background image */}
        <Image source={images.map} style={{ ...tw('absolute w-full h-full'), borderColor: 'white' }} resizeMode="cover" />
        {/* rest of elements */}
        <View style={tw('absolute bottom-0 w-full bg-white pt-6 pb-10 px-5 rounded-t-2xl flex')}>
          <Text style={tw('text-xl text-center font-semibold mb-6')}>Are you interested?</Text>
          <Pressable style={tw('bg-red-300 p-4 rounded-2xl')}>
            <Text style={tw('text-xl text-center font-semibold')}>Show interest</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </ModalLayout>
}

export default EventPage
