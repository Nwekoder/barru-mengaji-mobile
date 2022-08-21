import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MateriGharibHeader({title}) {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 10
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
})