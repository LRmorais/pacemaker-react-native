import React from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, Platform,
} from 'react-native';

import logo from '../../assets/pacemaker.png';
import Estilos from './style';

// import { Container } from './styles';

const RegisterScreen = ({ navigation }) => (
  <>
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
          placeholder="Name"
          autoCorrect={false}
          onChangeText={() => {}}
        />
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
        <TouchableOpacity style={Estilos.btnSubmit} onPress={() => navigation.navigate('Login')}>
          <Text style={Estilos.submitText}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Estilos.btnRegister} onPress={() => navigation.navigate('Login')}>
          <Text style={Estilos.registerText}>Já tem conta? Entre.</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  </>
);

export default RegisterScreen;
