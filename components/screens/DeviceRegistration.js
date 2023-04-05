import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../helpers/constants';
import ButtonGradient from '../ButtonGradient';
import CustomInput from '../CustomInput';

export const DeviceRegistration = () => {

  const [numberDevice, setNumberDevice] = useState("");

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.title}>Register Device Zetifi</Text>
        <Text style={{ marginTop: 20, textAlign: 'center' }}>Insert the information of the product that you want to associate. </Text>
      </View>
      <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Device Serial / Number</Text>
      <CustomInput 
        placeholder={ "Device Serial / Number" }
        value={ numberDevice }
        setValue={ setNumberDevice }
      />
      <View/>
      <ButtonGradient label={"Register Device"} buttonEvent={ () => { handleLogin( email, password ) }} disabled={ false } />
    </View>
  )
}

export default DeviceRegistration;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: '5%',
      alignItems: 'center',
      backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    color: colors.zetifiBlue,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
  },
});