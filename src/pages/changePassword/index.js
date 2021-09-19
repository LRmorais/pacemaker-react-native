import React from 'react';
import {
  View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Platform, SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import logo from '../../assets/pacemaker.png';
import Estilos from './style';

const ChangePassword = ({ navigation }) => (
  <SafeAreaView style={Estilos.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={Estilos.content}>
        <View style={Estilos.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back-circle-outline"
              color="#FF4949"
              size={45}
            />
          </TouchableOpacity>
        </View>
        <Text style={Estilos.title}>Alterar Senha</Text>

        <View style={Estilos.inputContainer}>
          <View style={Estilos.TextsContainer}>
            <Text style={Estilos.ColorTexts}>Digite sua senha atual</Text>
          </View>

          <TextInput
            style={Estilos.input}
            placeholder=""
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <View style={Estilos.TextsContainer}>
            <Text style={Estilos.ColorTexts}>Digite sua nova senha</Text>
          </View>
          <TextInput
            style={Estilos.input}
            placeholder=""
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <View style={Estilos.TextsContainer}>
            <Text style={Estilos.ColorTexts}>Digite novamente sua nova senha</Text>
          </View>
          <TextInput
            style={Estilos.input}
            placeholder=""
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={Estilos.btnSubmit} onPress={() => navigation.navigate('Login')}>
            <Text style={Estilos.submitText}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

export default ChangePassword;
