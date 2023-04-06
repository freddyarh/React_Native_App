import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Billing } from '../components/screens';
import { colors, routes } from '../helpers/constants';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({ 
      headerShown: false,
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;
        if (route.name === routes.HOME_TAB) {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === routes.BILL) {
          iconName = focused ? 'card' : 'card-outline';
        }

        return <Icon name={iconName} size={22} color={colors.simplifyBlue} />
      }
    })}>
      <Tab.Screen name={ routes.HOME_TAB } component={ Home } />
      <Tab.Screen name={ routes.BILL } component={ Billing } />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;