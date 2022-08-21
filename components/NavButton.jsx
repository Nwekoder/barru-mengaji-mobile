import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

/**
 * 
 * Just some navigation button
 * @constructor
 * @param {string} label - something to print
 * @param {string} screenGroup - group of navigation
 * @param {string} targetScreen - somewhere to go inside the nav group
 */
export default function NavButton({ navigation, label, screenGroup, targetScreen }) {
  return (
    <Pressable onPress={() => navigation.navigate(screenGroup, { screen: targetScreen })} android_ripple={{ color: '#63d13d', borderless: false }} style={styles.button}>
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