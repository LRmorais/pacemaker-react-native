/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  Text, View, SafeAreaView, TouchableOpacity,
} from 'react-native';
import ListFaq from './parts/list';
import Dot from './parts/dot';

const Faq = ({ navigation }) => {
  const primaryColor = '#FF4949';

  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: '#05011F', flexDirection: 'column', justifyContent: 'space-around',
    }}
    >
      <View>
        <Text style={{ fontSize: 25, color: '#fff', textAlign: 'center' }}>Como podemos ajudar você?</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Dot />
        <ListFaq />
      </View>

    </SafeAreaView>
  );
};

export default Faq;
