import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import ForgotPasswordScreen from '../components/auth/ForgotPasswordScreen';
import { routes, colors }  from '../helpers/constants';
// import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ "Login" }>
        <Stack.Screen name={ routes.LOGIN } component={ LoginScreen } />
        <Stack.Screen name="Register" component={ RegisterScreen } />
        <Stack.Screen name="Forgot Password" component={ ForgotPasswordScreen } options={({ route }) => ({
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: 'rgb(63.921569,77.647059,39.215686)'
            },
            title: route.params.idUser
        })} />
        <Stack.Screen name={ routes.HOME } component={ DrawerNavigator } options={{ }} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;