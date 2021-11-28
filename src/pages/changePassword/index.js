import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Estilos from './style';

import { useGlobalStateContext } from '../../hocs/globalState';
import { useUserInfo } from '../../contexts/userInfo';

const ChangePassword = ({ navigation }) => {
  const { generalData } = useGlobalStateContext();
  const { loading, sendPassword } = useUserInfo();
  // const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState({
    password: '',
  });

  const [repeat, setRepeat] = useState('');
  const id = generalData.user_id;

  function NewPassword() {
    if (repeat !== newPassword.password || repeat === '' || newPassword.password === '') {
      Alert.alert(
        'Erro: senhas diferentes.',
        'Digite novamente!',
        [{ text: 'OK', onPress: () => {} }],
      );
      setRepeat('');
      setNewPassword({ password: '' });
    } else {
      sendPassword(newPassword.password, id);
    }
  }

  return (
    <SafeAreaView style={Estilos.container}>
      {
        loading ? (
          <View style={Estilos.loading}>
            <ActivityIndicator size="large" color="#FF4949" />
          </View>
        ) : (
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
                  secureTextEntry={true}
                  onChangeText={() => {}}
                />

                <View style={Estilos.TextsContainer}>
                  <Text style={Estilos.ColorTexts}>Digite sua nova senha</Text>
                </View>
                <TextInput
                  style={Estilos.input}
                  placeholder=""
                  autoCorrect={false}
                  value={newPassword.password}
                  secureTextEntry={true}
                  onChangeText={(e) => setNewPassword({ ...newPassword, password: e })}
                />

                <View style={Estilos.TextsContainer}>
                  <Text style={Estilos.ColorTexts}>Digite novamente sua nova senha</Text>
                </View>
                <TextInput
                  style={Estilos.input}
                  placeholder=""
                  autoCorrect={false}
                  value={repeat}
                  secureTextEntry={true}
                  onChangeText={(e) => setRepeat(e)}
                />

                <TouchableOpacity style={Estilos.btnSubmit} onPress={NewPassword}>
                  <Text style={Estilos.submitText}>Salvar Senha</Text>
                </TouchableOpacity>
              </View>

            </View>
          </KeyboardAvoidingView>
        )
      }

    </SafeAreaView>
  );
};

export default ChangePassword;
