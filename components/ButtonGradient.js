import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { routes } from '../helpers/constants'

export default function ButtonGradient ({ navigation }) {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        <TouchableOpacity 
          style={styles.container}
          onPress={ () => navigation.navigate( routes.HOME ) }
        >
          <LinearGradient
            // Button Linear Gradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.button}
            >
            <Text style={styles.text}>SIGN IN {count}</Text>
          </LinearGradient>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 40,
      width: 200
    },
    text: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold'
    },
    button: {
      width: '80%',
      height: 50,
      borderRadius: 25,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
  