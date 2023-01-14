import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Wallet } from '../components/screens';
import { routes } from '../helpers/constants';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({ 
      headerShown: false,
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;
        if (route.name === routes.HOME_TAB) {
          iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
        } else if (route.name === routes.SETTINGS) {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === routes.WALLET) {
          iconName = focused ? 'wallet' : 'wallet-outline';
        } else if (route.name === routes.NOTIFICATIONS) {
          iconName = focused
            ? 'md-notifications-sharp'
            : 'md-notifications-outline';
        }

        return <Icon name={iconName} size={22} color={color} />
      }
    })}>
      <Tab.Screen name={ routes.HOME_TAB } component={ Home } />
      <Tab.Screen name={ routes.WALLET } component={ Wallet } />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;