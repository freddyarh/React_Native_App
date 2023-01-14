import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen () {
    const route = useRoute();
    return (
      <View style={ styles.container }>
        <Text>ForgotPasswordScreen</Text>
        <Text>Params: { route.params.userId }</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
