import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';

import Head from './parts/head';
import UserInfo from './parts/userInfo';
import Button from '../../commomComponents/button';

// import { Container } from './styles';

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#0B0633' }}>
    <View style={{
      flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%',
    }}
    >
      <Head navigation={navigation} />
      <UserInfo />
      <Button text="Verificar Identidade" action={() => {}} />
    </View>
  </SafeAreaView>
);

export default HomeScreen;
