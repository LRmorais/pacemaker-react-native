import React from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';

// import { Container } from './styles';

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

const UserInfo = () => (
  <View style={{
    padding: 15, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#050224', width: '100%', height: 330,
  }}
  >
    <View>
      <Image source={require('../../../assets/avatar.png')} />
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
      <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', height: 130 }}>
        <View>
          <Text style={styles.primaryText}>Nome do(a) portador(a)</Text>
          <Text style={styles.secondaryText}>Maria da Silva e Silva</Text>
        </View>
        <View>
          <Text style={styles.primaryText}>Número da carteirinha</Text>
          <Text style={styles.secondaryText}>0015248-2</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', height: 130 }}>
        <View>
          <Text style={styles.primaryText}>Data de nascimento</Text>
          <Text style={styles.secondaryText}>20/05/1995</Text>
        </View>
        <View>
          <Text style={styles.primaryText}>CPF</Text>
          <Text style={styles.secondaryText}>264.587.892-10</Text>
        </View>
      </View>
    </View>
  </View>
);

export default UserInfo;
