import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { Outlet } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { getEventsGroupedByDate } from '~/src/providers/events'
import { useEvents } from '~/src/store/events'
import PageLayout from '~/src/layouts/PageLayout'
import DateSelector from '~/src/components/DateSelector'
import Link from '~/src/components/Link'
import PlaceIcon from '~/assets/icons/place.svg'
import images from '~/data/images'

// TODO: move this component to its own file
const SectionItem = ({ events }) => {
  return <FlatList
    data={events}
    renderItem={({ item }) => {
      return <View style={{ ...tw('w-1/2 pb-4 px-2') }}>
        <Link to={`/events/${item.id}`}>
          <View style={{ ...tw('relative border rounded-lg overflow-hidden'), aspectRatio: 4 / 5 }}>
            <Image source={images[item.image]} style={{ ...tw('absolute w-full h-full rounded-lg') }} resizeMode="cover" />
            <View style={tw('absolute bottom-2 left-2')}>
              <Text style={tw('text-white text-lg font-bold')}>{item.title}</Text>
              <Text style={tw('text-white mb-0.5')}>With {item.userName}</Text>
              <View style={tw('flex flex-row items-center -ml-0.5')}>
                <PlaceIcon width={18} height={18} color="white" />
                <Text style={tw('text-white text-xs')}>{item.location}</Text>
              </View>
            </View>
          </View>
        </Link>
      </View>
    }}
    keyExtractor={item => item.id}
    numColumns={2}
    style={tw('-mx-2')} />
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
    <DateSelector numDays={7} value={dateFilter} onChange={setDateFilter} style={tw('pb-3')} />
    <FlatList
      data={events}
      renderItem={({ item }) => <View>
        <Text key={item.date}>{item.date}</Text>
        <SectionItem events={item.events} />
      </View>}
      keyExtractor={item => item.date}
      style={tw('pt-3')}
    />
    <Outlet />
  </PageLayout>
}

export default HomePage
