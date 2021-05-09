/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

function CustomHeader({ title, isHome, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 50 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {
               isHome
                 ? (
                   <TouchableOpacity onPress={() => navigation.openDrawer()}>
                     <Image
                       style={{
                         width: 30, height: 30, marginLeft: 5,
                       }}
                       source={require('./assets/icons/menu.png')}
                       resizeMode="contain"
                     />
                   </TouchableOpacity>

                 ) : (
                   <TouchableOpacity
                     style={{ flexDirection: 'row', alignItems: 'center' }}
                     onPress={() => navigation.goBack()}
                   >
                     <Image
                       style={{
                         width: 25, height: 25, marginLeft: 5,
                       }}
                       source={require('./assets/icons/back.png')}
                       resizeMode="contain"
                     />
                     <Text>Back</Text>
                   </TouchableOpacity>
                 )
        }
      </View>

      <View style={{ flex: 1.5, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>

  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('HomeDetail')}>
          <Text>Go Home detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={false} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Detail</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Settings" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SettingDetail')}>
          <Text>Go Settings detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Settings" isHome={false} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Detail</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notifications" isHome={false} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen</Text>
      </View>
    </SafeAreaView>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Register" isHome={false} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Register Screen</Text>
      </View>
    </SafeAreaView>
  );
}

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login Screen</Text>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('HomeApp')}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Register')}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./assets/icons/user.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
      </View>
      <ScrollView style={{ marginLeft: 5 }}>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('MenuTab')}>
          <Text>Menu Tab</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('Notifications')}>
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const navOptionsHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionsHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionsHandler} />
    </StackHome.Navigator>
  );
}

const StackSettings = createStackNavigator();

function SettingStack() {
  return (
    <StackSettings.Navigator initialRouteName="Setting">
      <StackSettings.Screen name="Setting" component={SettingsScreen} options={navOptionsHandler} />
      <StackSettings.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionsHandler} />
    </StackSettings.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./assets/icons/house.png')
              : require('./assets/icons/house-black.png');
          } else if (route.name === 'Settings') {
            iconName = focused ? require('./assets/icons/settings.png') : require('./assets/icons/settings-black.png');
          }

          // You can return any component that you like here!
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

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={(props) => CustomDrawerContent(props)}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

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
