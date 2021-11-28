import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../commomComponents/button';
// import { Container } from './styles';

const modal = (props) => {
  const modalizeRef = useRef(null);
  const navigation = useNavigation();

  const onClose = () => {
    modalizeRef.current?.close();
  };
  useEffect(() => {
    function onOpen() {
      if (props.data === null) {
        modalizeRef.current?.open();
      }
    }
    onOpen();
  }, []);
  // onOpen();
  return (
    <>
      <Modalize
        ref={modalizeRef}
        snapPoint={150}
        modalStyle={{ backgroundColor: '#0B0633' }}
      >
        <View style={{
          flex: 1,
          height: 300,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Text style={{ color: '#fff', fontSize: 25 }}>
            Bem vindo de volta!
          </Text>
          <Text style={{ color: '#fff', fontSize: 25 }}>
            Necessário completar o cadastro.
          </Text>
          <Button text="Completar agora" action={() => navigation.navigate('completeRegister')} />
          <TouchableOpacity style={{ paddingTop: 20 }} onPress={onClose}>
            <Text style={{ color: '#FFF', fontSize: 15 }}>
              Fechar e completar depois
            </Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </>
  );
};

export default modal;
