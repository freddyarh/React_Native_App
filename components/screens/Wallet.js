import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class Wallet extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Wallet</Text>
      </View>
    )
  }
}

export default Wallet;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});