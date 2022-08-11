import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

export default function NavButton({ navigation, label }) {
  return (
    <Pressable onPress={() => navigation.navigate('MateriRoutes', { screen: 'HukumNunTanwin' })} android_ripple={{ color: '#63d13d', borderless: false }} style={styles.button}>
      <Text style={styles.button_label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#499E2B',
      minHeight: 100,
      width: '100%',
      justifyContent: 'flex-end',
      padding: 12,
      paddingBottom: 10,
      borderRadius: 6,
      marginBottom: 10
  
    },
    button_label: {
      color: 'white',
      fontSize: 18
    }
})