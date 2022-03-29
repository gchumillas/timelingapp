import events from '~/data/events.json'

export const getEventsGroupedByDate = () => {
  return Promise.resolve(events)
}
