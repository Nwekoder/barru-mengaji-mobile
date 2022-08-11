import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function Profile() {
  return (
    <View>
      <View style={styles.header_container}>
        <View style={styles.header}>
          <Text style={styles.header_label}>Profil</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header_container: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    elevation: 7,
    justifyContent: 'flex-end'
  },
  header: {
    width: '100%',
    height: 52,
    backgroundColor: '#499E2B',
    justifyContent: 'center',
    paddingHorizontal: 12
  },
  header_label: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
})