/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  primaryText: {
    fontSize: 13,
    color: '#FF4949',
  },
  secondaryText: {
    fontSize: 18,
    color: '#E9E9E9',
  },
  // [...]
});

const UserInfo = (props) => (
  <View style={{
    padding: 15, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#050224', width: '100%', height: 330,
  }}
  >
    <View>
      <Image resizeMode="cover" style={{ width: 100, height: 100, borderRadius: 10 }} source={props.image ? props.image : require('../../../assets/profile.png')} />
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
      <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', height: 130 }}>
        <View>
          <Text style={styles.primaryText}>Nome do(a) portador(a)</Text>
          <Text style={styles.secondaryText}>{props?.name}</Text>
        </View>
        <View>
          <Text style={styles.primaryText}>Número da carteirinha</Text>
          <Text style={styles.secondaryText}>{props?.documentNumber}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', height: 130 }}>
        <View>
          <Text style={styles.primaryText}>Data de nascimento</Text>
          <Text style={styles.secondaryText}>{props?.birthday}</Text>
        </View>
        <View>
          <Text style={styles.primaryText}>CPF</Text>
          <Text style={styles.secondaryText}>{props?.cpf}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default UserInfo;
