/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  View, ActivityIndicator, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, Platform,
} from 'react-native';
import logo from '../../assets/pacemaker.png';
import Estilos from './styles';

import { useAuth } from '../../contexts/auth';
// import { Container } from './styles';

const LoginScreen = ({ navigation }) => {
  const { login, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    login(email, password);
  }

  return (
    <>
      {
        loading ? (
          <View style={Estilos.loading}>
            <ActivityIndicator size="large" color="#FF4949" />
          </View>
        ) : (
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
                autoCapitalize="none"
                onChangeText={(e) => setEmail(e)}
              />
              <TextInput
                style={Estilos.input}
                placeholder="Password"
                autoCorrect={false}
                onChangeText={(e) => setPassword(e)}
              />
              <TouchableOpacity style={Estilos.btnSubmit} onPress={handleSignIn}>
                <Text style={Estilos.submitText}>Acessar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Estilos.btnRegister} onPress={() => navigation.navigate('Register')}>
                <Text style={Estilos.registerText}>Criar conta</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        )
      }
    </>
  );
};

export default LoginScreen;
