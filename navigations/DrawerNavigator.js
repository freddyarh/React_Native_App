import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Wallet } from '../components/screens';
import { routes } from '../helpers/constants';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ routes.HOME } component={ BottomTabNavigator } />
      <Drawer.Screen name={ routes.WALLET_DRAWER } component={ Wallet } />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;