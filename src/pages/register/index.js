/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text, Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { signUp } from '../../services/auth';

import logo from '../../assets/pacemaker.png';
import Estilos from './style';

// import { Container } from './styles';

const RegisterScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    name: '',
    birthdate: '',
    number: '',
    password: '',
  });

  async function handleSignUp() {
    setLoading(true);
    const goSignUp = async () => signUp(data);

    goSignUp().then((r) => {
      if (r.error) {
        setLoading(false);
        Alert.alert(
          'Algum erro ocorreu',
          'Tente novamente ou entre em contato',
          [{ text: 'OK', onPress: () => {} }],
        );
      } else {
        setLoading(false);
        navigation.navigate('Login');
      }
    });
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
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(e) => setData({ ...data, email: e })}
              />
              <TextInput
                style={Estilos.input}
                placeholder="Nome"
                autoCorrect={false}
                onChangeText={(e) => setData({ ...data, name: e })}
              />
              <TextInput
                style={Estilos.input}
                placeholder="Data de nascimento"
                autoCorrect={false}
                onChangeText={(e) => setData({ ...data, surname: e })}
              />
              <TextInput
                style={Estilos.input}
                placeholder="Telefone"
                autoCorrect={false}
                onChangeText={(e) => setData({ ...data, number: e })}
              />
              <TextInput
                style={Estilos.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={(e) => setData({ ...data, password: e })}
              />
              <TouchableOpacity style={Estilos.btnSubmit} onPress={handleSignUp}>
                <Text style={Estilos.submitText}>Criar Conta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Estilos.btnRegister} onPress={() => navigation.navigate('Login')}>
                <Text style={Estilos.registerText}>Já tem conta? Entre.</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        )
      }

    </>
  );
};

export default RegisterScreen;
