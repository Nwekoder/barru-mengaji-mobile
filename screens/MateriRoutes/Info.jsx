import { View, ScrollView, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import logo_bm from '../../assets/icon.png'

export default function Info({navigation}) {
  return (
    <View>
      <View style={styles.header_container}>
        <CustomHeader navigation={navigation} title={"Info"} />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.logo_container}>
          <Image source={logo_bm} style={styles.logo} />
        </View>
        <Text style={styles.subtitle}>Tentang</Text>
        <Text style={styles.title}>Barru Mengaji</Text>
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
  },
  logo_container: {
    width: '100%',
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,   
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#499E2B'
  }
})