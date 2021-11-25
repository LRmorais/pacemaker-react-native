import React, { useState } from 'react';
import {
  View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Platform, SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useGlobalStateContext } from '../../hocs/globalState';

import Estilos from './style';

const ChangeUserInfo = ({ navigation }) => {
  const { generalData: values } = useGlobalStateContext();
  const [data, setData] = useState({
    name: values.name,
    birthdate: values.birthdate,
    card: values.card,
    cpf: values.cpf,
  });

  return (
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
          <Text style={Estilos.title}>Editar Informações</Text>

          <View style={Estilos.inputContainer}>
            <View style={Estilos.TextsContainer}>
              <Text style={Estilos.ColorTexts}>Nome do portador(a)</Text>
            </View>

            <TextInput
              style={Estilos.input}
              placeholder="Nome"
              autoCorrect={false}
              value={data.name}
              onChangeText={(e) => setData({ ...data, name: e })}
            />

            <View style={Estilos.TextsContainer}>
              <Text style={Estilos.ColorTexts}>Data de nascimento</Text>
            </View>
            <TextInput
              style={Estilos.input}
              placeholder="Data"
              autoCorrect={false}
              value={data.birthdate}
              onChangeText={(e) => setData({ ...data, birthdate: e })}
            />

            <View style={Estilos.TextsContainer}>
              <Text style={Estilos.ColorTexts}>Número da carteirinha</Text>
            </View>
            <TextInput
              style={Estilos.input}
              placeholder="Número"
              autoCorrect={false}
              value={data.card}
              onChangeText={(e) => setData({ ...data, card: e })}
            />
            <View style={Estilos.TextsContainer}>
              <Text style={Estilos.ColorTexts}>CPF</Text>
            </View>
            <TextInput
              style={Estilos.input}
              placeholder="CPF"
              autoCorrect={false}
              value={data.cpf}
              onChangeText={(e) => setData({ ...data, cpf: e })}
            />

            <TouchableOpacity style={Estilos.btnSubmit} onPress={() => navigation.navigate('Login')}>
              <Text style={Estilos.submitText}>Salvar Informações</Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChangeUserInfo;
