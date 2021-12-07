/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import { useAuth } from '../contexts/auth';
import { getObjData, getDataStg } from '../helpers/Storage';

const Context = createContext();
export const useGlobalStateContext = () => useContext(Context);

const GlobalStateProvider = (props) => {
  const [generalData, setGeneralData] = useState(null);
  const [token, setToken] = useState(null);

  const userInfo = {
    name: 'Maria da Silva e Silva',
    card: '0015248-2',
    birthdate: '20/05/1995',
    cpf: '264.587.892-10',
  };

  useEffect(() => {
    getObjData('DATA').then((res) => {
      setGeneralData(res);
    });
    getDataStg('TOKEN_KEY').then((res) => {
      setToken(res);
    });
  }, []);

  const value = {
    generalData,
    userInfo,
    token,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default GlobalStateProvider;
