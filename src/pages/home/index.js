import React from 'react';
import {
  View, SafeAreaView,
} from 'react-native';

import { useGlobalStateContext } from '../../hocs/globalState';

import Head from './parts/head';
import UserInfo from './parts/userInfo';
import Button from '../../commomComponents/button';

const HomeScreen = ({ navigation }) => {
  const { userInfo } = useGlobalStateContext();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B0633' }}>
      <View style={{
        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%',
      }}
      >
        <Head navigation={navigation} name={userInfo.name} />
        <UserInfo
          name={userInfo.name}
          documentNumber={userInfo.documentNumber}
          birthday={userInfo.birthday}
          cpf={userInfo.cpf}
        />
        <Button text="Verificar Identidade" action={() => navigation.navigate('Qrcode')} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
