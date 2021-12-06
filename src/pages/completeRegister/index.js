/* eslint-disable no-useless-return */
/* eslint-disable padded-blocks */
import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/Ionicons';
import { useGlobalStateContext } from '../../hocs/globalState';
import { useUserInfo } from '../../contexts/userInfo';

import Estilos from './style';

const CompleteRegistration = ({ navigation }) => {
  const { generalData: values } = useGlobalStateContext();
  const { loading, completeInfos } = useUserInfo();
  const id = values.user_id;
  const [data, setData] = useState({
    cpf: '',
    rg: '',
    cep: '',
    district: '',
    city: '',
    state: '',
    image_url: '',
  });

  function sendInfos() {
    completeInfos(data, id);
  }

  function ImagePickerCallback(imageData) {

    // if (imageData.didCancel) {
    //   console.log('cancelado');
    //   return;
    // }
    // if (imageData.error) {
    //   console.log('error');
    //   return;
    // }
    // if (!imageData.uri) {
    //   console.log('error');
    //   return;
    // }
    // setData({ ...data, image_url: imageData.assets[0].uri });
    const dataImage = new FormData();

    dataImage.append('image_url', {
      fileName: imageData.assets[0].fileName,
      uri: imageData.assets[0].uri,
      type: imageData.assets[0].type,
    });
    setData({ ...data, dataImage });

  }
  return (

    <SafeAreaView style={Estilos.container}>
      {
        loading ? (
          <View style={Estilos.loading}>
            <ActivityIndicator size="large" color="#FF4949" />
          </View>
        ) : (
          <ScrollView>
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
                <Text style={Estilos.title}>Completar Cadastro</Text>

                <View style={Estilos.inputContainer}>
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

                  <View style={Estilos.TextsContainer}>
                    <Text style={Estilos.ColorTexts}>Registro Geral (RG)</Text>
                  </View>
                  <TextInput
                    style={Estilos.input}
                    placeholder="Registro Geral"
                    autoCorrect={false}
                    value={data.rg}
                    onChangeText={(e) => setData({ ...data, rg: e })}
                  />

                  <View style={Estilos.TextsContainer}>
                    <Text style={Estilos.ColorTexts}>CEP</Text>
                  </View>
                  <TextInput
                    style={Estilos.input}
                    placeholder="CEP"
                    autoCorrect={false}
                    value={data.cep}
                    onChangeText={(e) => setData({ ...data, cep: e })}
                  />

                  <View style={Estilos.TextsContainer}>
                    <Text style={Estilos.ColorTexts}>Bairro</Text>
                  </View>
                  <TextInput
                    style={Estilos.input}
                    placeholder="Bairro"
                    autoCorrect={false}
                    value={data.district}
                    onChangeText={(e) => setData({ ...data, district: e })}
                  />

                  <View style={Estilos.TextsContainer}>
                    <Text style={Estilos.ColorTexts}>Cidade</Text>
                  </View>
                  <TextInput
                    style={Estilos.input}
                    placeholder="Cidade"
                    autoCorrect={false}
                    value={data.city}
                    onChangeText={(e) => setData({ ...data, city: e })}
                  />

                  <View style={Estilos.TextsContainer}>
                    <Text style={Estilos.ColorTexts}>Estado</Text>
                  </View>
                  <TextInput
                    style={Estilos.input}
                    placeholder="Estado"
                    autoCorrect={false}
                    value={data.state}
                    onChangeText={(e) => setData({ ...data, state: e })}
                  />

                  <View style={Estilos.TextsContainer}>
                    <Text style={Estilos.ColorTexts}>Adicione uma foto de perfil</Text>
                  </View>
                  <TouchableOpacity
                    style={Estilos.btnSendPhoto}
                    onPress={() => launchImageLibrary({}, ImagePickerCallback)}
                  >
                    <Text style={Estilos.submitText}>Foto de perfil</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={Estilos.btnSubmit} onPress={sendInfos}>
                    <Text style={Estilos.submitText}>Salvar Informações</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        )
      }

    </SafeAreaView>

  );
};

export default CompleteRegistration;
