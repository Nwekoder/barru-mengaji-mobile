import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const {Navigator, Screen} = createNativeStackNavigator()

import Imalah from './Imalah'
import Isymam from './Isymam'
import Saktah from './Saktah'
import Tashil from './Tashil'
import Naqi from './Naqi'
import Badal from './Badal'

export default function MateriGharib() {
  return (
    <Navigator>
      <Screen name='Imalah' component={Imalah} />
      <Screen name='Isymam' component={Isymam} />
      <Screen name='Saktah' component={Saktah} />
      <Screen name='Tashil' component={Tashil} />
      <Screen name='Naqi' component={Naqi} />
      <Screen name='Badal' component={Badal} />
    </Navigator>
  )
}