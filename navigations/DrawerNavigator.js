import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Billing, DeviceRegistration, Home } from '../components/screens';
import { ThrottleDevice, ChangeSSID, UpdateFirmware, TroubleshootConnection } from '../components/screens/ManageDevice/index';
import { routes, colors } from '../helpers/constants';
import BottomTabNavigator from './BottomTabNavigator';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen 
        name={ routes.HOME } 
        component={ Home }
        options={{
          title: 'Home',
          headerTintColor: colors.white,
          headerStyle: {
              backgroundColor: colors.zetifiBlue,
          },
        }}
        />
      <Drawer.Screen 
        name={ routes.DEVICE_REG } 
        component={ DeviceRegistration }
        options={{
          title: 'Device Registration',
          headerTintColor: colors.white,
          headerStyle: {
              backgroundColor: colors.zetifiBlue,
          },
        }}
        />
      <Drawer.Screen 
        name={ routes.MANAGE_DEVICE_THROTTLE } 
        component={ ThrottleDevice }
        options={{
          title: 'Manage Device Throttle',
          headerTintColor: colors.white,
          headerStyle: {
              backgroundColor: colors.zetifiBlue
          },
        }}
        />
      <Drawer.Screen 
        name={ routes.CHANGE_SSD } 
        component={ ChangeSSID }
        options={{
          title: routes.CHANGE_SSD,
          headerTintColor: colors.white,
          headerStyle: {
              backgroundColor: colors.zetifiBlue
          },
        }}
        />
      <Drawer.Screen 
        name={ routes.UPDATE_FIRMWARE } 
        component={ UpdateFirmware }
        options={{
          title: routes.UPDATE_FIRMWARE,
          headerTintColor: colors.white,
          headerStyle: {
              backgroundColor: colors.zetifiBlue
          },
        }}
        />
      <Drawer.Screen 
        name={ routes.TROUBLE_CONNECTION } 
        component={ TroubleshootConnection }
        options={{
          title: routes.TROUBLE_CONNECTION,
          headerTintColor: colors.white,
          headerStyle: {
              backgroundColor: colors.zetifiBlue
          },
        }}
        />
      <Drawer.Screen 
        name={ routes.BILL } 
        component={ Billing }
        options={{
          title: routes.BILL,
          headerTintColor: colors.white,
          headerStyle: {
              backgroundColor: colors.zetifiBlue
          },
        }}
        />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;