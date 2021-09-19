import React from 'react';
import {
  View, Text, Image, TouchableOpacity, Touchable, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Container } from './styles';

const styles = StyleSheet.create({
  buttonDrawer: {
    width: 50,
    height: 50,
    backgroundColor: '#FF4949',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNotification: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryText: {
    fontSize: 20,
    color: '#E9E9E9',
    marginLeft: 10,
  },
  // [...]
});

const Head = (props) => (
  <View style={{
    padding: 15, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#0B0633', width: '100%', height: 100,
  }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <View style={styles.buttonDrawer}>
          <Icon
            name="list-outline"
            color="#E9E9E9"
            size={24}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.primaryText}>{`Olá, ${props.name.split(' ')[0]}`}</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity>
        <View style={styles.buttonNotification}>
          <Icon
            name="notifications"
            color="#fff"
            size={24}
          />
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default Head;
