import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function Button({onPress, label}) {
  return (
    <Pressable style={styles.button} onPress={() => onPress}>
      <Text stlye={styles.label}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#499E2B',
        paddingHorizontal: 20,
        paddingVertical: 12,
        width: 200,
        borderRadius: 8
    }
})