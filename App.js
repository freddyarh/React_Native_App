import React, { useEffect, useMemo, useReducer } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AuthNavigator from './navigations/AuthNavigator';
import { AuthContext } from './context/AuthContext';
import DrawerNavigator from './navigations/DrawerNavigator';
import { loginReducer } from './components/auth/authReducer'
import { colors } from './helpers/constants';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Arial-Ln': require('./assets/fonts/Arialn.ttf'),
    'FieldGeoRegular': require('./assets/fonts/fieldwork-geo-regular.otf'),
  });

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    signIn: ( userName, password ) => {
      let userToken;
      userToken = null;
      if( userName === 'user@gmail.com' && password === 'pass'){
        userToken = 'asdsad';
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: () => {
      dispatch({ type:'LOGOUT' });
    },
    signUp: () => {
      setUserToken('asdsa');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'RETRIEVE_TOKEN', token: 'null' });
    }, 1000);
  }, []);

  if( loginState.isLoading && !fontsLoaded ) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color={ colors.simplifyBlue } />
      </View>
    );
  }
  
  return (
    <AuthContext.Provider value={ authContext }> 
      <NavigationContainer>
        { loginState.userToken === null ? (
          <AuthNavigator />
          ):(
          <DrawerNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

