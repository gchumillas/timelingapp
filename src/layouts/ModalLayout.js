import React from 'react'
import { View, Modal } from 'react-native'
import { tw } from '~/src/libs/tailwind'
import { useStatusBarHeight } from '~/src/libs/status-bar'

const ModalLayout = ({ children }) => {
  const statusHeight = useStatusBarHeight()

  return <Modal animationType="none">
    <View style={{ ...tw('h-full'), marginTop: statusHeight }}>
      {children}
    </View>
  </Modal>
}

export default ModalLayout
