import React from 'react';
import {
  View, TouchableOpacity, StyleSheet, Touchable, Text,
} from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FF4949',
    width: '100%',
    height: 50,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  text: {
    color: '#fff',
    fontSize: 17,
  },
});

const Button = (props) => (
  <View style={{ width: '55%' }}>
    {props && (
    <TouchableOpacity style={styles.Container} onPress={props.action}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
    )}

  </View>
);

export default Button;
