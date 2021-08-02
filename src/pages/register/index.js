import React, { useState } from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, Platform, Alert,
} from 'react-native';
import CustomHeader from '../../components/customHeader/index';

import logo from '../../assets/pacemaker.png';
import Estilos from './style';

import api from '../../services/userApi';

// import { Container } from './styles';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signUp() {
    const body = {
      name,
      surname: name,
      email,
      password,
    };
    await api.post('signup', body)
      .then((response) => {
        console.log(response.data);
        navigation.navigate('Tutorial');
      })
      .catch((error) => alert(error.code));
  }

  return (
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
            onChangeText={(nameInput) => setName(nameInput)}
          />
          <TextInput
            style={Estilos.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={(emailInput) => setEmail(emailInput)}
          />
          <TextInput
            style={Estilos.input}
            placeholder="Password"
            autoCorrect={false}
            onChangeText={(passwordInput) => setPassword(passwordInput)}
          />
          <TouchableOpacity style={Estilos.btnSubmit} onPress={signUp}>
            <Text style={Estilos.submitText}>Criar Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.btnRegister} onPress={() => navigation.navigate('Login')}>
            <Text style={Estilos.registerText}>Já tem conta? Entre.</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterScreen;
