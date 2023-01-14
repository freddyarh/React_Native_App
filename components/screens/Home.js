import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

export function Home () {
  return (
    <View style={ styles.container }>
      <Text>Home</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});