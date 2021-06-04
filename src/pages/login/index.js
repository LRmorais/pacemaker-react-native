/* eslint-disable global-require */
import React from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, Platform,
} from 'react-native';
import logo from '../../assets/pacemaker.png';
import Estilos from './styles';

// import { Container } from './styles';

const LoginScreen = ({ navigation }) => {
  const ok = 20;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={Estilos.background}
    >
      <View style={Estilos.containerLogo}>
        <Image source={logo} />
      </View>

      <View style={Estilos.container}>
        <TextInput
          style={Estilos.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={Estilos.input}
          placeholder="Password"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TouchableOpacity style={Estilos.btnSubmit} onPress={() => navigation.navigate('HomeApp')}>
          <Text style={Estilos.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Estilos.btnRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={Estilos.registerText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
