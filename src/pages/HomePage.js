import React from 'react'
import { Text } from 'react-native'
import { getEventsGroupedByDate } from '~/src/providers/events'
import PageLayout from '~/src/layouts/PageLayout'
import DateSelector from '~/src/components/inputs/DateSelector'

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
    {eventsGroupedByDate.map(item => <Text key={item.date}>{item.date}</Text>)}
  </PageLayout>
}

export default HomePage
