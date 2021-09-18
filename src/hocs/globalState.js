/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();
export const useGlobalStateContext = () => useContext(Context);

const GlobalStateProvider = (props) => {
  const [generalData, setGeneralData] = useState(null);

  const value = {
    generalData,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default GlobalStateProvider;
