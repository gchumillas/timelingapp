import React from 'react'
import { NativeRouter, Routes, Route } from 'react-router-native'
import HomePage from '~/src/pages/HomePage'

// TODO: add redux
// TODO: add comments
export default function App () {
  return <NativeRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </NativeRouter>
}
