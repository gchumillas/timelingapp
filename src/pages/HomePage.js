import React from 'react'
import { Text } from 'react-native'
import PageLayout from '~/src/layouts/PageLayout'
import DateSelector from '~/src/components/inputs/DateSelector'

const HomePage = () => {
  const [dateFilter, setDateFilter] = React.useState(null) // DateTime filter

  return <PageLayout title="Nearby events">
    <DateSelector numDays={7} value={dateFilter} onChange={setDateFilter} />
    <Text>Home Page</Text>
  </PageLayout>
}

export default HomePage
