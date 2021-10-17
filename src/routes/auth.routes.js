import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '../pages';

const AuthStack = createNativeStackNavigator();

// Options p/ stack
const navOptionsHandler = () => ({
  headerShown: false,
});

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Screens.Login} options={navOptionsHandler} />
    <AuthStack.Screen name="Register" component={Screens.Register} options={navOptionsHandler} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
