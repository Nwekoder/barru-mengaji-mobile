import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <View style={styles.header_container}>
        <View style={styles.header}>
          <Text style={styles.header_label}>Barru Mengaji</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <Pressable onPress={() => navigation.navigate('MateriRoutes', {screen: 'HukumNunTanwin'})} android_ripple={{color: '#63d13d', borderless: false}} style={styles.button}>
          <Text style={styles.button_label}>Hukum Nun Mati dan Tanwin</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('MateriRoutes', {screen: 'Gharib'})} android_ripple={{color: '#63d13d', borderless: false}} style={styles.button}>
          <Text style={styles.button_label}>Gharib</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('MateriRoutes', {screen: 'VideoPT'})} android_ripple={{color: '#63d13d', borderless: false}} style={styles.button}>
          <Text style={styles.button_label}>VideoPT</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('MateriRoutes', {screen: 'Info'})} android_ripple={{color: '#63d13d', borderless: false}} style={styles.button}>
          <Text style={styles.button_label}>Info BM</Text>
        </Pressable>
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
  button: {
    backgroundColor: '#499E2B',
    minHeight: 80,
    width: '100%',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8

  },
  button_label: {
    color: 'white',
    fontSize: 18
  }
})