import React from 'react'
import { SafeAreaView, View, Image, Text, Pressable } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { getEvent } from '~/src/providers/events'
import ModalLayout from '~/src/layouts/ModalLayout'
import LeftNavIcon from '~/assets/icons/left-nav.svg'
import EllispsisIcon from '~/assets/icons/ellipsis.svg'
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
  </ModalLayout>
}

export default EventPage
