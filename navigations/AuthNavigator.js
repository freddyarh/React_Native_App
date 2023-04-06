import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import ForgotPasswordScreen from '../components/auth/ForgotPasswordScreen';
import { routes, colors }  from '../helpers/constants';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator headerMode='Login'>
        <Stack.Screen name={ routes.LOGIN } component={ LoginScreen } options={({ route }) => ({
            headerTintColor: colors.simplifyBlue,
            headerShown: false,
            headerStyle: {
                backgroundColor: colors.white
            }
        })}/>
        <Stack.Screen name="Register" component={ RegisterScreen } options={({ route }) => ({
            headerTintColor: colors.simplifyBlue,
            headerStyle: {
                backgroundColor: colors.white
            },
            title: 'Back'
        })}/>
        <Stack.Screen name="Forgot Password" component={ ForgotPasswordScreen } options={({ route }) => ({
            headerTintColor: colors.simplifyBlue,
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: colors.white
            },
            title: 'Back'
        })} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;