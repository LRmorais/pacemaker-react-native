/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import {
  Image, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
import Tutorial from './pages/tutorial/index';
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
  const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#7f5df0',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 0.25,
      elevation: 5,
    },
  });

  const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#FF4949',
      }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        style: {
          position: 'absolute',
          // bottom: 5,
          // left: 3,
          // right: 3,
          elevation: 0,
          backgroundColor: '#05011F',
          height: 60,
          // borderRadius: 15,

        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center', justifyContent: 'center', top: 10, marginBottom: 25,
            }}
            >
              <Image
                source={require('./assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#FF4949' : '#fff',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/icons/profile.png')}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center', justifyContent: 'center', top: 10, marginBottom: 25,
            }}
            >
              <Image
                source={require('./assets/icons/help.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#FF4949' : '#fff',
                }}
              />
            </View>
          ),
        }}
      />
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
        <StackApp.Screen name="Tutorial" component={Tutorial} options={navOptionsHandler} />
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionsHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
