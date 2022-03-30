import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { DateTime } from 'luxon'
import cn from 'react-native-classnames'
import { tw } from '~/src/libs/tailwind'

const DateSelector = ({ numDays, value, onChange }) => {
  const now = DateTime.now()
  const days = React.useMemo(_ => {
    const ret = []
    for (let i = 0; i < numDays; i++) {
      ret.push(now.plus({ days: i }))
    }

    return ret
  }, [now.toLocaleString()])

  return <View style={tw('flex flex-row')}>
    {days.map((date, i) => <Pressable
      key={i}
      onPress={_ => onChange(date)}
      style={cn(styles, 'item', { selected: date.toLocaleString() == value?.toLocaleString() })}
    >
      <Text style={tw('text-lg font-semibold leading-6')}>{date.day}</Text>
      <Text style={tw('text-xs')}>{date.weekdayShort}</Text>
    </Pressable>)}
  </View>
}

const styles = StyleSheet.create({
  item: { ...tw('flex-1 flex items-center border-1/2 border-gray-500 rounded-md m-1 p-1') },
  selected: tw('border-red-300 bg-red-50')
})

export default DateSelector
