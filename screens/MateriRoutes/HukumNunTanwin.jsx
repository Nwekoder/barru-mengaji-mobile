import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import NavButton from '../../components/NavButton'

export default function HukumNunTanwin({navigation}) {
  return (
    <View>
      <View style={styles.header_container}>
        <CustomHeader navigation={navigation} title={"Hukum Nun Mati dan Tanwin"} />
      </View>
      <ScrollView style={styles.container}>
        <NavButton label={"Idzhar Halqi"} />
        <NavButton label={"Ikhfa"} />
        <NavButton label={"Idgham"} />
        <NavButton label={"Iqlab"} />
      </ScrollView>
    </View>
  )
}

export const styles = StyleSheet.create({
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