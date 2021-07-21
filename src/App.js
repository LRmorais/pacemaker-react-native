/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import { Image } from 'react-native';
// Componentes do React Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// importação das pages
import HomeScreen from './pages/home/home';
import HomeScreenDetail from './pages/home/homeScreenDetail';
import SettingsScreen from './pages/settings/settingsScreen';
import SettingsScreenDetail from './pages/settings/settingsScreenDetail';
import NotificationsScreen from './pages/notification/notificationsScreen';
import RegisterScreen from './pages/register/index';
import LoginScreen from './pages/login/index';
// importação de componentes
import CustomDrawerContent from './components/customDrawerContent/index';

// Options p/ stack
const navOptionsHandler = () => ({
  headerShown: false,
});

// Stack da tab Home ------------------------------------
const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionsHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionsHandler} />
    </StackHome.Navigator>
  );
}

// Stack da tab Settings -----------------------------------
const StackSettings = createStackNavigator();

function SettingStack() {
  return (
    <StackSettings.Navigator initialRouteName="Setting">
      <StackSettings.Screen name="Setting" component={SettingsScreen} options={navOptionsHandler} />
      <StackSettings.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionsHandler} />
    </StackSettings.Navigator>
  );
}

// Tabs-----------------------------------------------------
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // para cada tab é possivel adicionar 2 icones de acordo com foco
          if (route.name === 'Home') {
            iconName = focused
              ? require('./assets/icons/house.png')
              : require('./assets/icons/house-black.png');
          } else if (route.name === 'Settings') {
            iconName = focused ? require('./assets/icons/settings.png')
              : require('./assets/icons/settings-black.png');
          }

          return <Image source={iconName} style={{ width: 25, height: 25 }} resizeMode="contain" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} options={navOptionsHandler} />
    </Tab.Navigator>
  );
}
// --------------------------------------------------------

// Drawer -------------------------------------------------
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={(props) => CustomDrawerContent(props)}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

// Stacks da area de login ----------------------------------------------
const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigation} options={navOptionsHandler} />
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionsHandler} />
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionsHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
