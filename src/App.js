import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/auth';
import HOCs from './hocs';

import Routes from './routes';

const NewApp = () => (
  <PaperProvider>
    <AuthProvider>
      <HOCs>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </HOCs>
    </AuthProvider>

  </PaperProvider>
);

export default NewApp;
