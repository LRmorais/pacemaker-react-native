/* eslint-disable react/prop-types */
/* eslint-disable no-sparse-arrays */
import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import { Alert } from 'react-native';
import { signIn } from '../services/auth';
import { getDataStg, clearAll } from '../helpers/Storage';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function isAuthenticated() {
      const storagedToken = await getDataStg('TOKEN_KEY');

      if (storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setToken(storagedToken);
      }
    }
    isAuthenticated();
  }, []);

  async function login(email, password) {
    // pegar aqui os dados do usuario e enviar para a api
    setLoading(true);
    const goLogin = async () => signIn({ email, password });

    goLogin().then((r) => {
      if (r.error) {
        setLoading(false);
        Alert.alert(
          'Algum erro ocorreu',
          'Tente novamente ou entre em contato',
          [{ text: 'OK', onPress: () => {} }],
        );
      } else {
        setLoading(false);
        setToken(r.token);
      }
    });
  }

  function logout() {
    // removeValue('USER_KEY');
    clearAll().then(() => {
      setToken(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!token, loading, token, login, logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
