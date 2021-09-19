/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();
export const useGlobalStateContext = () => useContext(Context);

const GlobalStateProvider = (props) => {
  const [generalData, setGeneralData] = useState(null);

  const userInfo = {
    name: 'Maria da Silva e Silva',
    documentNumber: '0015248-2',
    birthday: '20/05/1995',
    cpf: '264.587.892-10',
  };

  const value = {
    generalData,
    userInfo,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default GlobalStateProvider;
