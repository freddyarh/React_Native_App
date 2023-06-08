import React, { useEffect, useMemo, useReducer } from 'react';
import { View, ActivityIndicator } from 'react-native';
import app from './firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { useAuthentication } from './helpers/hooks/useAuthentication';
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

  const auth = getAuth();

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    signIn: async( userName, password ) => {
      let userToken;
      userToken = null;
      await signInWithEmailAndPassword(auth, userName, password)
      .then(({user}) => {
          userToken = user.stsTokenManager.accessToken;
          dispatch({ type: 'LOGIN', id: user.displayName, token: userToken });
      })
      .catch(err => {
          console.log(err.message);
          if (err.message === "Firebase: Error (auth/wrong-password).") return alert("User or password incorrect");
      })
    },
    signOut: async() => {
      await auth.signOut();
      dispatch({ type:'LOGOUT' });
    },
    signUp: () => {
      setUserToken('asdsa');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      app;
      dispatch({ type: 'RETRIEVE_TOKEN', token: null });
    }, 1000);
  }, []);

  if( loginState.isLoading && !fontsLoaded ) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color={ colors.zetifiBlue } />
      </View>
    );
  }
  
  return (
    <AuthContext.Provider value={ authContext }> 
      <NavigationContainer>
        { loginState.userToken === null ? (
        // { user ? (
          <AuthNavigator />
          ):(
          <DrawerNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

