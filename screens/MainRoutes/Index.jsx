import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import Home from './Home'
import Profile from './Profile'

const {Navigator, Screen} = createBottomTabNavigator()

export default function Index() {
  return (
    <Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarStyle: {backgroundColor: "#499E2B"}, tabBarActiveTintColor: 'white', tabBarInactiveTintColor: '#ffffffaa'}}>
        <Screen options={{tabBarIcon: ({color, size}) => (<Icon name="home" size={size} color={color} />)}} name="Home" component={Home} />
        <Screen options={{tabBarIcon: ({color, size}) => (<Icon name="account" size={size} color={color} />)}} name="Profile" component={Profile} />
    </Navigator>
  )
}