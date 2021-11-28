/* eslint-disable react/prop-types */
/* eslint-disable no-sparse-arrays */
import React, {
  createContext, useState, useContext,
} from 'react';
import { Alert } from 'react-native';
import { changeNewPassword, completeRegistration } from '../services/userInfo';
import { getDataStg } from '../helpers/Storage';

const UserContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  async function sendPassword(password, id) {
    setLoading(true);
    const storagedToken = await getDataStg('TOKEN_KEY');
    const goPassword = async () => changeNewPassword({ password, id, storagedToken });

    goPassword().then((r) => {
      if (r.error) {
        console.log(r.error);
        setLoading(false);
        Alert.alert(
          'Algum erro ocorreu',
          'Tente novamente ou entre em contato',
          [{ text: 'OK', onPress: () => {} }],
        );
      } else {
        setLoading(false);
        Alert.alert(
          'Senha Alterada com sucesso.',
          [{ text: 'OK', onPress: () => {} }],
        );
      }
    });
  }
  async function completeInfos(data, id) {
    setLoading(true);
    const storagedToken = await getDataStg('TOKEN_KEY');
    const goCompleteInfos = async () => completeRegistration({ data, id, storagedToken });

    goCompleteInfos().then((r) => {
      if (r.error) {
        console.log(r.error);
        setLoading(false);
        Alert.alert(
          'Algum erro ocorreu',
          'Tente novamente ou entre em contato',
          [{ text: 'OK', onPress: () => {} }],
        );
      } else {
        setLoading(false);
        Alert.alert(
          'Informações enviadas com sucesso.',
          [{ text: 'OK', onPress: () => {} }],
        );
      }
    });
  }

  return (
    <UserContext.Provider
      value={{
        loading, sendPassword, completeInfos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserInfo() {
  const context = useContext(UserContext);

  return context;
}
