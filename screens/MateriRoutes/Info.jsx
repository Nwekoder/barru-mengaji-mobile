import { View, ScrollView, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'

export default function Info({navigation}) {
  return (
    <View>
      <View style={styles.header_container}>
        <CustomHeader navigation={navigation} title={"Info"} />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.logo_container}>
          
        </View>
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