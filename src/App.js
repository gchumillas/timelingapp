import React from 'react'
import { NativeRouter, Routes, Route } from 'react-router-native'
import HomePage from './pages/HomePage'

export default function App () {
  return <NativeRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </NativeRouter>
}
