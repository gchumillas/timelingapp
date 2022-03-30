import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { Outlet } from 'react-router-native'
import { DateTime } from 'luxon'
import { tw } from '~/src/libs/tailwind'
import { getEventsGroupedByDate } from '~/src/providers/events'
import { useEvents } from '~/src/store/events'
import PageLayout from '~/src/layouts/PageLayout'
import DateSelector from '~/src/components/DateSelector'
import Thumbnail from '../components/Thumbnail'

const HomePage = () => {
  const [events, setEvents] = useEvents()
  const [dateFilter, setDateFilter] = React.useState(null)

  const loadEvents = async _ => {
    const events = await getEventsGroupedByDate()
    setEvents(events)
  }

  React.useEffect(_ => {
    loadEvents()
  }, [])

  return <PageLayout title="Nearby events">
    <DateSelector numDays={7} value={dateFilter} onChange={setDateFilter} style={tw('pb-3')} />
    <FlatList
      data={events}
      renderItem={({ item }) => <View>
        <Text key={item.date} style={tw('text-xs text-gray-500 font-semibold mb-4')}>
          {item.date.toLocaleString(DateTime.DATE_MED)}
        </Text>
        <FlatList
          data={item.events}
          renderItem={({ item }) => <Thumbnail {...item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          style={tw('-mx-2')} />
      </View>}
      keyExtractor={item => item.date}
      contentContainerStyle={tw('py-3')}
    />
    <Outlet />
  </PageLayout>
}

export default HomePage
