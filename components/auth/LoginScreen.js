import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-paper';

import { colors, routes } from '../../helpers/constants';
import ButtonGradient from '../ButtonGradient';
import CustomInput from '../CustomInput';

import { AuthContext } from '../../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("pass");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [loginBottonDisabled, setLoginBottonDisabled] = useState(true);
  const [eyeButton, setEyeButton] = useState(true);

  const { signIn } = useContext(AuthContext);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
      setLoginBottonDisabled(false);
    } else {
      setCheckValidEmail(true);
      setLoginBottonDisabled(true);
    }
  };

  const handleLogin = ( userEmail, password ) => {
    const userEmailTrim = userEmail.trim();
    signIn( userEmailTrim, password );
  }

  const iconEye = () => {
    eyeButton ? setEyeButton(false) : setEyeButton(true);
  }

const { height } = useWindowDimensions(); 

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image
            style={[styles.logo, { height: height * 0.3 }]}
            source={require('../../assets/images/logo.jpg')}
            resizeMode="contain"
          /> 
        </View>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        {/* <TextInput
          style={{ width: '100%'}}
          label="Password"
          secureTextEntry={eyeButton}
          right={<TextInput.Icon icon="eye" onPress={ iconEye }/>}
        /> */}
        <CustomInput 
          label={ "Email" }
          value={ email }
          setValue={ handleCheckEmail }
          rightEye={ false }
        />
        {checkValidEmail ? (
        <Text style={styles.textFailed}>Wrong email format</Text>
        ) : (
          null
        )}
        <CustomInput 
          label={ "Password" }
          value={ password }
          setValue={ setPassword }
          secureTextEntry={ eyeButton } 
          rightEye={ true }
          rightEyeButton={ iconEye }
        />
        <Text style={styles.forgotPassword} onPress={() => navigation.navigate("Forgot Password")}>Forgot your password?</Text>
        <ButtonGradient label={"Sign In"} buttonEvent={ () => { handleLogin( email, password ) }} disabled={ loginBottonDisabled } />
        <Text style={styles.createAccount}>Don't have an account? <Text style={styles.register} onPress={() => navigation.navigate( routes.REGISTER)}>Sign up</Text></Text>
        <StatusBar style="auto" />
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '5%'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    paddingTop: 60,
  },
  title: {
    fontSize: 50,
    color: '#34434D',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 20,
    color: colors.gray
  },
  forgotPassword:{
    fontSize: 15,
    color: colors.gray,
    marginTop: 15,
    alignSelf: 'flex-end'
  },
  createAccount:{
    fontSize: 15,
    color: colors.gray,
    marginTop: 15,
  },
  logo: {
    width: '70%',
    marginBottom:40,
    minWidth: 300,
    maxHeight: 200,
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
  register: {
    color: colors.simplifyBlue,
    fontSize: 15,
    marginTop: 14,
  }
});
