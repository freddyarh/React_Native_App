import React, { useState, useEffect } from 'react';
import { Button, Platform, View, StyleSheet, Text } from 'react-native';

import * as Location from 'expo-location';

export default Permissions = () => {
  
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
    
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  
    return (
      <View style={styles.container}>
        {/* <Text style={styles.paragraph}>{text}</Text> */}
        <View style={ styles.boxPurple } />
        <View style={ styles.boxOrange } />
        <View style={ styles.boxBlue } />
      </View>
    );
}


const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   padding: 20,
    // },
    // paragraph: {
    //   fontSize: 18,
    //   textAlign: 'center',
    // },
    container: {
      flex: 1,
      backgroundColor: '#28425B',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    boxPurple: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#5856D6',
    },
    boxOrange: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#F0A23B',
      top: 50,
    },
    boxBlue: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
      backgroundColor: '#28C4D9',
    },
    
  });