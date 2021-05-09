import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import CustomHeader from '../../components/customHeader/index';

// import { Container } from './styles';

const RegisterScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="Register" isHome={false} navigation={navigation} />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Register Screen</Text>
    </View>
  </SafeAreaView>
);

export default RegisterScreen;
