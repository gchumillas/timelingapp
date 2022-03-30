import { DateTime } from 'luxon'
import events from '~/data/events.json'

export const getEventsGroupedByDate = () => {
  return Promise.resolve(events.map(({ date, ...rest }) => ({ date: DateTime.fromISO(date), ...rest })))
}
