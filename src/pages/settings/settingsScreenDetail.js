import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import CustomHeader from '../../components/customHeader/index';

// import { Container } from './styles';

const SettingsScreenDetail = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="Settings" isHome={false} navigation={navigation} />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Detail</Text>
    </View>
  </SafeAreaView>
);

export default SettingsScreenDetail;
