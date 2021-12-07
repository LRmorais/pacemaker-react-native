import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../pages';

const SecurityStack = createNativeStackNavigator();

// Options p/ stack
const navOptionsHandler = () => ({
  headerShown: false,
});

const SecurityRoutes = () => (
  <SecurityStack.Navigator>
    <SecurityStack.Screen name="HomeSecurity" component={Screens.HomeSecurity} options={navOptionsHandler} />
    <SecurityStack.Screen name="QRCodeReader" component={Screens.QRCodeReader} options={navOptionsHandler} />
    <SecurityStack.Screen name="SearchUser" component={Screens.SearchUser} options={navOptionsHandler} />
    <SecurityStack.Screen name="ResultValidate" component={Screens.ResultValidate} options={navOptionsHandler} />
  </SecurityStack.Navigator>
);

export default SecurityRoutes;
