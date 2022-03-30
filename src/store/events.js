import { useSelector, useDispatch } from 'react-redux'

export const useEventsGroupedByDate = _ => {
  const dispatch = useDispatch()
  const events = useSelector(state => state.events)
  const setEvents = payload => dispatch({ type: 'SET_EVENTS', payload })

  return [events, setEvents]
}
