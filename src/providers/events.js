import { DateTime } from 'luxon'
import events from '~/data/events.json'

export const getEventsGroupedByDate = (date = null) => {
  const items = events
    .map(({ date, ...rest }) => ({ date: DateTime.fromISO(date), ...rest }))
    .filter(x => !date || x.date.toLocaleString() == date.toLocaleString())

  return Promise.resolve(items)
}

export const getEvent = async id => {
  const events = await getEventsGroupedByDate()
  const items = events.flatMap(x => x.events)
  const item = items.find(x => x.id == id)

  return { ...item, date: DateTime.fromISO(item.date) }
}
