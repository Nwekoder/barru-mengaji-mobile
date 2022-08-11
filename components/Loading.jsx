import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View style={styles.container}>
        <ActivityIndicator color="#fff" size="large" />
        <Text style={styles.text}>Loading....</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: '#499E2B',
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10
    }
})