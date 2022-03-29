import React from 'react'
import { Text, SectionList } from 'react-native'
import { getEventsGroupedByDate } from '~/src/providers/events'
import PageLayout from '~/src/layouts/PageLayout'
import DateSelector from '~/src/components/inputs/DateSelector'

const HomePage = () => {
  const [dateFilter, setDateFilter] = React.useState(null) // DateTime
  const [eventsGroupedByDate, setEventsGroupedByDate] = React.useState([])

  const loadEvents = async _ => {
    const events = await getEventsGroupedByDate()
    // rename `events` by `data`, as the SectionList component requires a `data` property
    const items = events.map(({ events, ...item }) => ({ data: events, ...item }))

    setEventsGroupedByDate(items)
  }

  React.useEffect(_ => {
    loadEvents()
  }, [])

  return <PageLayout title="Nearby events">
    <DateSelector numDays={7} value={dateFilter} onChange={setDateFilter} />
    <SectionList
      sections={eventsGroupedByDate}
      renderSectionHeader={({ section }) => <Text>{section.date}</Text>}
      renderItem={({ item }) => <Text>{item.userName}</Text>}
      keyExtractor={item => item.id}
    />
  </PageLayout>
}

export default HomePage
