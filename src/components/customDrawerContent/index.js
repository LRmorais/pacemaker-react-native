import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';

// import { Container } from './styles';

const customDrawerContent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../../assets/icons/user.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
    <ScrollView style={{ marginLeft: 5 }}>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('MenuTab')}>
        <Text>Menu Tab</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('Notifications')}>
        <Text>Notifications</Text>
      </TouchableOpacity>
    </ScrollView>
    <TouchableOpacity style={{ marginTop: 20, marginLeft: 5 }} onPress={() => props.navigation.navigate('Login')}>
      <Text>Logout</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

export default customDrawerContent;
