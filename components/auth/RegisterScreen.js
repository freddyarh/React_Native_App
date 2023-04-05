import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, routes } from '../../helpers/constants';
import handleCheckPassword from '../../helpers/validator/handleCheckPassword';
import ButtonGradient from '../ButtonGradient';
import CustomInput from '../CustomInput';


export default function RegisterScreen ({ navigation }) {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [errorPasswordMsj, setErrorPasswordMsj] = useState(null);
  const [errorRepeatPassword, setErrorRepeatPassword] = useState(null);
  const [eyeButton, setEyeButton] = useState(true);
  
  const iconEye = () => {
    eyeButton ? setEyeButton(false) : setEyeButton(true);
  }

  const formValidation = () => {
    let user = userName.trim();
    const checkPassowrd = handleCheckPassword(password);
    if(user === "" || userName.length < 4 ){
      setErrorName("Insert your user name");
      return false;
    }
    if(userEmail === ""){
      setCheckValidEmail(true);
      return false;
    }
    if(checkPassowrd){
      setErrorPasswordMsj(checkPassowrd);
      return false;
    }
    if(password !== repeatPassword){
      setErrorRepeatPassword("Password and repeat password must be the same");
      return false;
    }
    return true;
  }

  const handleLogin = () => {
    if (formValidation()) return alert('Success');
  };

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setUserEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Create an account</Text>
          <CustomInput 
            label={ "User name" }
            value={ userName }
            setValue={ setUserName }
          />
          {errorName !== "" ? (
            <Text style={styles.textFailed}>{ errorName }</Text>
          ) : (
            null
          )}
          <CustomInput 
            label={ "Email" }
            value={ userEmail }
            setValue={ handleCheckEmail }
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
          {errorPasswordMsj ? (
            <Text style={styles.textFailed}>{ errorPasswordMsj }</Text>
          ) : (
            null
          )}
          <CustomInput 
            label={ "Repeat Password" }
            value={ repeatPassword }
            setValue={ setRepeatPassword }
            secureTextEntry={ eyeButton } 
            rightEye={ true }
            rightEyeButton={ iconEye }
          />
          {errorRepeatPassword ? (
            <Text style={styles.textFailed}>{ errorRepeatPassword }</Text>
          ) : (
            null
          )}
          <ButtonGradient label={"Register"} buttonEvent={ handleLogin } disabled={ false } />
        <Text style={styles.gotAnAccount}>Already got an account? <Text style={styles.loginBack} onPress={() => navigation.navigate( routes.LOGIN )}>Sign in</Text></Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    paddingHorizontal: '5%'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: colors.zetifiBlue,
    fontWeight: 'bold',
  },
  gotAnAccount: {
      color: colors.gray,
      fontSize: 15,
      marginTop: 14,
  },
  loginBack: {
      color: colors.zetifiBlue,
      fontSize: 15,
      marginTop: 14,
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});
