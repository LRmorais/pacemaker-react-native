import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './drawer.routes';

import Screens from '../pages';

const AppStack = createNativeStackNavigator();

// Options p/ stack
const navOptionsHandler = () => ({
  headerShown: false,
});

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Tutorial" component={Screens.Tutorial} options={navOptionsHandler} />
    <AppStack.Screen name="HomeApp" component={DrawerNavigation} options={navOptionsHandler} />
    <AppStack.Screen name="Qrcode" component={Screens.QrcodeValidation} options={navOptionsHandler} />
    <AppStack.Screen name="ChangeUserInfo" component={Screens.ChangeUserInfo} options={navOptionsHandler} />
    <AppStack.Screen name="ChangePassword" component={Screens.ChangePassword} options={navOptionsHandler} />
  </AppStack.Navigator>
);

export default AppRoutes;
