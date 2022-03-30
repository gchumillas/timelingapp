import React from 'react'
import { NativeRouter, Routes, Route, Navigate } from 'react-router-native'
import { Provider } from 'react-redux'
import store from '~/src/store'
import HomePage from '~/src/pages/HomePage'
import EventPage from '~/src/pages/EventPage'

// TODO: add comments
export default function App () {
  return <Provider store={store}>
    <NativeRouter>
      <Routes>
        <Route path="/events" element={<HomePage />}>
          <Route path="/events/:id" element={<EventPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/events" />} />
      </Routes>
    </NativeRouter>
  </Provider>
}
