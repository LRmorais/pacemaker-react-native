/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView } from 'react-native';

import estilos from './styles';
import Button from '../../commomComponents/button';
import { useAuth } from '../../contexts/auth';

const HomeSecurity = (props) => {
  const { logout } = useAuth();
  function goQRcode() {
    props.navigation.navigate('QRCodeReader');
  }
  return (
    <SafeAreaView style={estilos.container}>
      <Button text="Validar Cliente" action={goQRcode} />
      <Button text="Sair" action={logout} />
    </SafeAreaView>
  );
};

export default HomeSecurity;
