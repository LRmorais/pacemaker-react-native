/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import estilos from './styles';
import sucess from '../../assets/sucess.png';
import fail from '../../assets/fail.png';

const ResultValidate = (props) => {
  // console.log(props.route.params);
  const { type } = props.route.params;

  return (
    <View style={estilos.container}>
      {
        type === 'sucess' ? (
          <>
            <TouchableOpacity style={{ padding: 30 }} onPress={() => props.navigation.navigate('HomeSecurity')}>
              <Text style={{ color: '#FF4949', fontSize: 20 }}>Voltar para Home</Text>
            </TouchableOpacity>
            <View style={{ height: '85%', justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Image source={sucess} />
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
          </>
        ) : (
          <>
            <TouchableOpacity style={{ padding: 30 }} onPress={() => props.navigation.navigate('HomeSecurity')}>
              <Text style={{ color: '#FF4949', fontSize: 20 }}>Voltar para Home</Text>
            </TouchableOpacity>
            <View style={{ height: '85%', justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Image source={fail} />
              </View>
              <Text style={{
                color: '#E9E9E9', textAlign: 'center', margin: 5, fontSize: 30,
              }}
              >
                Opss...!
              </Text>
              <Text style={{ color: '#A8A8A8', textAlign: 'center', margin: 5 }}>

                {'\n'}
                Não possível realizar a validação :(
                {'\n'}
                Tente novamente mais tarde
              </Text>
            </View>
          </>
        )
      }

    </View>
  );
};

export default ResultValidate;
