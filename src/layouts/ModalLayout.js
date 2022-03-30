import React from 'react'
import { View, Modal } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const ModalLayout = ({ children }) => {
  return <Modal animationType="none">
    <View style={tw('h-full')}>
      {children}
    </View>
  </Modal>
}

export default ModalLayout
