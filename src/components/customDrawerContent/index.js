import React from 'react';
import {
  Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,
} from 'react-native';

import { useAuth } from '../../contexts/auth';

const customDrawerContent = (props) => {
  const { logout } = useAuth();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#05011F' }}>

      <View style={{
        height: 200, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column',
      }}
      >
        <Image source={require('../../assets/avatar.png')} style={{ height: 120, width: 120, borderRadius: 20 }} />
        <Text style={{
          fontSize: 18,
          color: '#FF4949',
        }}
        >
          {props.name}

        </Text>
      </View>

      <ScrollView style={{ marginLeft: 5, paddingHorizontal: 20 }}>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('ChangeUserInfo')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Editar Informações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('ChangePassword')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('completeRegister')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Completar Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => props.navigation.navigate('MenuTab')}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Avaliar Aplicativo</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={{ marginTop: 20, paddingHorizontal: 20 }} onPress={logout}>
        <Text style={{ color: '#fff', fontSize: 20 }}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default customDrawerContent;
