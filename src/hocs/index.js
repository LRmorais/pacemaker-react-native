import React from 'react';

import GlobalStateProvider from './globalState';

const HOCs = [
  GlobalStateProvider,
];

export default ({ children: mainApp }) => HOCs.reduce(
  (mergedProviders, NextProvider) => (
    <NextProvider>
      {mergedProviders}
    </NextProvider>
  ), mainApp,
);
