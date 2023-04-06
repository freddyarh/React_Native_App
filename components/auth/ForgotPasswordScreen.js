import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../helpers/constants/colors'
import CustomInput from '../CustomInput';
import ButtonGradient from '../ButtonGradient';

export default function ForgotPasswordScreen () {
  
    const [code, setCode] = useState("");

    const sendCode = () => {
      alert('Code sent');
    }

    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>Reset your password</Text>
        <Text style={ styles.description }>Enter the email associated with your account and we'll send an email with instructions to reset your password.</Text>
        <Text style={ styles.titleCode }>Email address</Text>
        <CustomInput 
          label={ "example@gmail.com" }
          value={code }
          setValue={ setCode}
          style={styles.textInput}
        />
        <ButtonGradient label={"Send Instructions"} buttonEvent={ sendCode }/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: '#fff'
    },
    title: {
      fontSize: 30,
      color: colors.simplifyBlue,
      fontWeight: 'bold',
    },
    titleCode: {
      color: colors.gray,
      marginTop: 20,
      fontSize: 18,
    },
    description: {
      color: colors.gray,
      fontSize: 18,
      marginTop: 14,
    },
    textInput: {
      padding: 10,
      paddingStart: 30,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#f1f1f1'
    },
});
