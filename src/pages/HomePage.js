import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { Outlet } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { getEventsGroupedByDate } from '~/src/providers/events'
import { useEvents } from '~/src/store/events'
import PageLayout from '~/src/layouts/PageLayout'
import DateSelector from '~/src/components/DateSelector'
import Link from '~/src/components/Link'
import images from '~/data/images'

// TODO: move this component to its own file
const SectionItem = ({ events }) => {
  return <FlatList
    data={events}
    renderItem={({ item }) => {
      return <View style={{ ...tw('p-1 w-1/2') }}>
        <Link to={`/events/${item.id}`}>
          <View style={{ ...tw('relative border'), aspectRatio: 4 / 5 }}>
            <Image source={images[item.image]} style={{ ...tw('absolute w-full h-full') }} resizeMode="cover" />
            <Text key={item.id}>{item.userName}</Text>
          </View>
        </Link>
      </View>
    }}
    keyExtractor={item => item.id}
    numColumns={2} />
}

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
    <DateSelector numDays={7} value={dateFilter} onChange={setDateFilter} />
    <FlatList
      data={events}
      renderItem={({ item }) => <View>
        <Text key={item.date}>{item.date}</Text>
        <SectionItem events={item.events} />
      </View>}
      keyExtractor={item => item.date}
    />
    <Outlet />
  </PageLayout>
}

export default HomePage
