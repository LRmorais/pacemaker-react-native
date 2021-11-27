import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/auth';
import { UserInfoProvider } from './contexts/userInfo';
import HOCs from './hocs';

import Routes from './routes';

const NewApp = () => (
  <PaperProvider>
    <AuthProvider>
      <UserInfoProvider>
        <HOCs>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </HOCs>
      </UserInfoProvider>
    </AuthProvider>

  </PaperProvider>
);

export default NewApp;
