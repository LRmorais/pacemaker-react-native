/* eslint-disable global-require */
import React from 'react';
import {
  Image, View, TouchableOpacity, StyleSheet, Text,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '../pages';

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
        component={Screens.Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center', justifyContent: 'center', top: 10, marginBottom: 25,
            }}
            >
              <Image
                source={require('../assets/icons/home.png')}
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
              source={require('../assets/icons/profile.png')}
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
        component={Screens.Faq}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center', justifyContent: 'center', top: 10, marginBottom: 25,
            }}
            >
              <Image
                source={require('../assets/icons/help.png')}
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

export default TabNavigator;
