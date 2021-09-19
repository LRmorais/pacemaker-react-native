import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Dot = () => (
  <View
    style={{
      width: '100%',
      height: 40,
      flexDirection: 'column',
    }}
  >
    <View
      activeOpacity={0.9}
      style={{
        backgroundColor: '#E5DFDF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        height: 1000,
      }}
    >
      <View
        style={{
          flex: 1,
          maxWidth: 40,
          height: 3,
          marginHorizontal: 2,
          backgroundColor: '#FF4949',
        }}
      />

    </View>

  </View>
);

export default Dot;
