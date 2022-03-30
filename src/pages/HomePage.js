import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { Outlet } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { getEventsGroupedByDate } from '~/src/providers/events'
import PageLayout from '~/src/layouts/PageLayout'
import DateSelector from '~/src/components/DateSelector'
import Link from '~/src/components/Link'
import images from '~/data/images'

// TODO: move this component to its own file
const SectionItem = ({ events }) => {
  return <FlatList
    data={events}
    renderItem={({ item }) => {
      // TODO: use w-1/2 instead of maxWidth
      return <View style={{ ...tw('flex-1 p-1'), maxWidth: '50%' }}>
        <Link to={`/events/${item.id}`}>
          <View style={tw('border')}>
            <Text key={item.id}>{item.userName}</Text>
            <Image source={images[item.image]} style={{ width: 50, height: 50, ...tw('border') }} resizeMode={'cover'} />
          </View>
        </Link>
      </View>
    }}
    keyExtractor={item => item.id}
    numColumns={2} />
}

const HomePage = () => {
  const [dateFilter, setDateFilter] = React.useState(null) // DateTime
  const [eventsGroupedByDate, setEventsGroupedByDate] = React.useState([])

  const loadEvents = async _ => {
    const events = await getEventsGroupedByDate()
    setEventsGroupedByDate(events)
  }

  React.useEffect(_ => {
    loadEvents()
  }, [])

  return <PageLayout title="Nearby events">
    <DateSelector numDays={7} value={dateFilter} onChange={setDateFilter} />
    <FlatList
      data={eventsGroupedByDate}
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
