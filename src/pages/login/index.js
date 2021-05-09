import React from 'react';
import { Text, View, Button } from 'react-native';

// import { Container } from './styles';

const Login = ({ navigation }) => (
  <View>
    <Text>
      Login
    </Text>

    <Button
      title="Registrar"
      onPress={() => navigation.navigate('home')}
    />
  </View>
);

export default Login;
