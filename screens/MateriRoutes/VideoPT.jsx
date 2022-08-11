import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'

export default function VideoPT({navigation}) {
  return (
    <View>
      <View style={styles.header_container}>
        <View style={styles.header_container}>
          <CustomHeader navigation={navigation} title={"VideoPT"} />
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