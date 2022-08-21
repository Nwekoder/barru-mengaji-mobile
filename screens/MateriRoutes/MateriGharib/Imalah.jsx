import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

import MateriGharibHeader from '../../../components/MateriGharibHeader'

export default function Imalah() {
  return (
    <View style={styles.container}>
      <MateriGharibHeader title="Imalah" />
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam repellat iure voluptates eos praesentium aspernatur in mollitia aut nam quisquam corrupti ipsam obcaecati ducimus maiores, distinctio, rem sed sapiente. Repudiandae!</Text>

      <Pressable style={styles.playButton}>
          <Icon name='play-circle' size={52} color="white" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    playButton: {
      position: 'absolute',
      bottom: 15,
      right: 15,
      width: 75,
      height: 75,
      backgroundColor: '#499E2Bce',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center'
  },
  container: {
    height: '100%'
  }
})