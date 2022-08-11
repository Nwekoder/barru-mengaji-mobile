import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import HukumNunTanwin from './HukumNunTanwin'
import Gharib from './Gharib'
import VideoPT from './VideoPT'
import Info from './Info'

const {Navigator, Screen} = createBottomTabNavigator()

export default function Index() {

  return (
    <Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarStyle: {backgroundColor: "#499E2B"}, tabBarActiveTintColor: 'white', tabBarInactiveTintColor: '#ffffffaa'}}>
        <Screen options={{tabBarIcon: ({color, size}) => (<Icon name="abjad-arabic" size={size} color={color} />)}} name="HukumNunTanwin" component={HukumNunTanwin} />
        <Screen options={{tabBarIcon: ({color, size}) => (<Icon name="book" size={size} color={color} />)}} name="Gharib" component={Gharib} />
        <Screen options={{tabBarIcon: ({color, size}) => (<Icon name="video" size={size} color={color} />)}} name="VideoPT" component={VideoPT} />
        <Screen options={{tabBarIcon: ({color, size}) => (<Icon name="information" size={size} color={color} />)}} name="Info" component={Info} />
    </Navigator>
  )
}