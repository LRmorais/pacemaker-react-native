import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import CustomHeader from '../../components/customHeader/index';

// import { Container } from './styles';

const HomeScreenDetail = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="Home" isHome={false} navigation={navigation} />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Detail</Text>
    </View>
  </SafeAreaView>
);

export default HomeScreenDetail;
