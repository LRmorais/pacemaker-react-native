import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import estilos from './styles';
import logo from '../../assets/sucess.png';

const ResultValidate = (props) => (
  <View style={estilos.container}>
    <TouchableOpacity style={{ padding: 30 }} onPress={() => props.navigation.navigate('HomeSecurity')}>
      <Text style={{ color: '#FF4949', fontSize: 20 }}>Voltar para Home</Text>
    </TouchableOpacity>
    <View style={{ height: '85%', justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Image source={logo} />
      </View>
      <Text style={{
        color: '#E9E9E9', textAlign: 'center', margin: 5, fontSize: 30,
      }}
      >
        Sucesso!
      </Text>
      <Text style={{ color: '#A8A8A8', textAlign: 'center', margin: 5 }}>

        {'\n'}
        Validação de identidade
        {'\n'}
        finalizada
      </Text>
    </View>

  </View>
);

export default ResultValidate;
