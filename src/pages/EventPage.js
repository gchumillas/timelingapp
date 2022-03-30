import React from 'react'
import { Text, Pressable } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import ModalLayout from '~/src/layouts/ModalLayout'
import LeftNavIcon from '~/assets/icons/left-nav.svg'

const EventPage = _ => {
  const navigate = useNavigate()
  const { id } = useParams()
  const doClose = _ => navigate('/events')

  return <ModalLayout>
    <Pressable onPress={doClose}>
      <LeftNavIcon width={30} height={30} />
    </Pressable>
    <Text>Event page: {id}</Text>
  </ModalLayout>
}

export default EventPage
