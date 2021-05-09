import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';

// import { Container } from './styles';

const LoginScreen = ({ navigation }) => (
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

export default LoginScreen;
