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
  function goSearch() {
    props.navigation.navigate('SearchUser');
  }
  return (
    <SafeAreaView style={estilos.container}>
      <Button text="Validar QR Code" action={goQRcode} />
      <Button text="Buscar Usuário" action={goSearch} />
      <Button text="Sair" action={logout} />
    </SafeAreaView>
  );
};

export default HomeSecurity;
