import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class Buttons {

    button_one (param1, handleButton1) {
        return (
            <>
              <Icon 
                name="information" 
                color={ 'blue' }
                size={18}
                onPress={ handleButton1 }
                style={ styles.button }
              >
                <Text>{ param1 }</Text>
              </Icon>
                {/* <Button title={ param1 } color="#f194ff" /> */}
            </>
        )
    }

    button_two (param2) {
        return (
            <>
                <Button title={ param2 } color="#841584" />
            </>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        textAlign: 'center',
        width: '100%',
        // height: '5%'
    }
})