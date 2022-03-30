import React from 'react'
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { useStatusBarHeight } from '~/src/libs/status-bar'
import LeftNavIcon from '~/assets/icons/left-nav.svg'

// TODO: add ModalLayout component
const EventPage = _ => {
  const statusHeight = useStatusBarHeight()
  const navigate = useNavigate()
  const { id } = useParams()
  const doClose = _ => navigate('/events')

  return <Modal animationType="none">
    <View style={{ ...styles.root, marginTop: statusHeight }}>
      <Pressable onPress={doClose}>
        <LeftNavIcon width={30} height={30} />
      </Pressable>
      <Text>Event page: {id}</Text>
    </View>
  </Modal>
}

const styles = StyleSheet.create({
  root: {
    ...tw('h-full border')
  }
})

export default EventPage
