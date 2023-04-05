import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const CustomInput = ({ value, setValue, label, secureTextEntry, rightEye, rightEyeButton }) => {

  return (
    <>
     <TextInput
          style={styles.textInput}
          label={ label }
          secureTextEntry={ secureTextEntry }
          onChangeText={ setValue }
          value={ value }
          right={rightEye ? <TextInput.Icon icon="eye" onPress={ rightEyeButton }/> : null}
        />
    </>
  )
}


const styles = StyleSheet.create({
    textInput: {
      width: '100%',
      height: 50,
      marginTop: 20,
      borderWidth: 0,
      backgroundColor: '#f1f1f1'
    },
});
export default CustomInput;