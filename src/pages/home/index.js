import React from 'react';
import {
  View, SafeAreaView,
} from 'react-native';

import { useGlobalStateContext } from '../../hocs/globalState';

import Head from './parts/head';
import UserInfo from './parts/userInfo';
import Button from '../../commomComponents/button';
import Modal from './parts/modal';

const HomeScreen = ({ navigation }) => {
  const { generalData } = useGlobalStateContext();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B0633' }}>
      <View style={{
        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%',
      }}
      >
        {generalData ? (
          <>
            <Head navigation={navigation} name={generalData.name} />
            <UserInfo
              name={generalData.name}
              documentNumber={generalData.card}
              birthday={generalData.birthdate}
              cpf={generalData.cpf}
            />
            <Modal data={generalData.cpf} />
            <Button text="Verificar Identidade" action={() => navigation.navigate('Qrcode')} />
          </>
        ) : null}

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
