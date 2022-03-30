import { DateTime } from 'luxon'
import events from '~/data/events.json'

export const getEventsGroupedByDate = () => {
  return Promise.resolve(events.map(({ date, ...rest }) => ({ date: DateTime.fromISO(date), ...rest })))
}

export const getEvent = async id => {
  const events = await getEventsGroupedByDate()
  const items = events.flatMap(x => x.events)
  const item = items.find(x => x.id == id)

  return { ...item, date: DateTime.fromISO(item.date) }
}
