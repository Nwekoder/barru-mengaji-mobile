import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export default function CustomHeader({navigation, title}) {
  return (
    <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.header_icon}>
            <Icon name='home' size={28} color={'#fff'} />
        </Pressable>
        <Text style={styles.header_label}>  
            {title}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 52,
      backgroundColor: '#499E2B',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 12,
      flexDirection: 'row'
    },
    header_icon: {
        justifyContent: 'center',
        marginRight: 20
    },
    header_label: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
      justifyContent: 'center'
    },
})