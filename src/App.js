/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import {
  Image, View, TouchableOpacity, StyleSheet, Text,
} from 'react-native';
// Componentes do React Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useGlobalStateContext } from './hocs/globalState';

// importação das screens
import Screens from './pages';
// importação de componentes
import CustomDrawer from './components/customDrawerContent/index';

// Options p/ stack
const navOptionsHandler = () => ({
  headerShown: false,
});

// Stack da tab Home ------------------------------------
const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={Screens.Home} options={navOptionsHandler} />
    </StackHome.Navigator>
  );
}

// Stack da tab Settings -----------------------------------
const StackFaq = createStackNavigator();

function FaqStack() {
  return (
    <StackFaq.Navigator initialRouteName="Faq">
      <StackFaq.Screen name="Faq" component={Screens.Faq} options={navOptionsHandler} />
    </StackFaq.Navigator>
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
          height: '10%',
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
        component={Screens.QrcodeValidation}
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
        name="Faq"
        component={FaqStack}
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

function CustomDrawerContent(props) {
  const { userInfo } = useGlobalStateContext();
  return (
    <CustomDrawer name={userInfo.name} {...props} />
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
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
        <StackApp.Screen name="Login" component={Screens.Login} options={navOptionsHandler} />
        <StackApp.Screen name="Tutorial" component={Screens.Tutorial} options={navOptionsHandler} />
        <StackApp.Screen name="Register" component={Screens.Register} options={navOptionsHandler} />
        <StackApp.Screen name="Qrcode" component={Screens.QrcodeValidation} options={navOptionsHandler} />
        <StackApp.Screen name="ChangePassword" component={Screens.ChangePassword} options={navOptionsHandler} />
        <StackApp.Screen name="ChangeUserInfo" component={Screens.ChangeUserInfo} options={navOptionsHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
