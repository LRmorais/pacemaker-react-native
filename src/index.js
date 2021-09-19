import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import HOCs from './hocs';
import Routes from './App';

const NewApp = () => (
  <PaperProvider>
    <HOCs>
      <Routes />
    </HOCs>
  </PaperProvider>
);

export default NewApp;
