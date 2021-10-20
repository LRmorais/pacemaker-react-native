/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView } from 'react-native';

import estilos from './styles';
import Button from '../../commomComponents/button';

const HomeSecurity = (props) => {
  function goQRcode() {
    props.navigation.navigate('QRCodeReader');
  }
  return (
    <SafeAreaView style={estilos.container}>
      <Button text="Validar Cliente" action={goQRcode} />
    </SafeAreaView>
  );
};

export default HomeSecurity;
