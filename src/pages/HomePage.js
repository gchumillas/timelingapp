import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { tw } from '~/src/libs/tailwind'
import { getEventsGroupedByDate } from '~/src/providers/events'
import PageLayout from '~/src/layouts/PageLayout'
import DateSelector from '~/src/components/inputs/DateSelector'
import images from '~/data/images'

const SectionItem = ({ events }) => {
  return <FlatList
    data={events}
    renderItem={({ item }) => {
      return <View style={{ ...tw('flex-1 p-1'), maxWidth: '50%' }}>
        <View style={tw('border')}>
          <Text key={item.id}>{item.userName}</Text>
          <Image source={images[item.image]} style={{ width: 50, height: 50, ...tw('border') }} resizeMode={'cover'} />
        </View>
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
  </PageLayout>
}

export default HomePage
