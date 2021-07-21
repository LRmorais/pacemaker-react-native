import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import CustomHeader from '../../components/customHeader/index';

// import { Container } from './styles';

const SettingsScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#05011F' }}>
    <CustomHeader title="Settings" isHome={true} navigation={navigation} />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('SettingDetail')}>
        <Text>Go Settings detail</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default SettingsScreen;
