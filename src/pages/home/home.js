import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';

import CustomHeader from '../../components/customHeader/index';

// import { Container } from './styles';

const HomeScreen = ({ navigation }) => (
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

export default HomeScreen;
