import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { colors } from '../../../helpers/constants';

export const TroubleshootConnection = () => {
    
    const { height } = useWindowDimensions(); 

  return (
    <View style={styles.mainContainer}>
        <View style={styles.containerImage}>
            <Image
                style={[styles.logo, { height: height * 0.3 }]}
                source={require('../../../assets/images/wrong_connection.jpg')}
                resizeMode="contain"
            /> 
        </View>
        <Text style={styles.title}>
            Somenthing went wrong
        </Text>
        <Text style={styles.textDescription}>
            Make sure wifi or cellular data is turned on and then try again.
        </Text>
        <TouchableOpacity style={ styles.button }>
            <Text style={styles.textButton}>TRY AGAIN</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TroubleshootConnection;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
        flex: 1,
        padding: '5%',
        alignItems: 'center'
    },
    containerImage: {
        marginTop: 40,
    },
    logo: {
        width: '70%',
        marginBottom:40,
        minWidth: 300,
        maxHeight: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    textDescription: {
        color: colors.gray,
        textAlign: 'center',
        fontSize: 16
    },
    textButton: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        width: '100%',
        marginTop: 40,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.brightRed,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})