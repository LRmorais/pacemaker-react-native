/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useGlobalStateContext } from '../hocs/globalState';
import CustomDrawer from '../components/customDrawerContent/index';
import TabNavigator from './tab.routes';

function CustomDrawerContent(props) {
  const { generalData } = useGlobalStateContext();
  return (
    <CustomDrawer name={generalData?.name} {...props} />
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
