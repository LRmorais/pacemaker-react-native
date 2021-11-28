import axios from 'axios';
import { getDataStg, saveDataStr, saveData } from '../helpers/Storage';
import api from './api';

const baseUrl = 'https://pacemakers-back.herokuapp.com/';

export const isAuthenticated = () => getDataStg('TOKEN_KEY') !== null;

export const signIn = async (credencias) => {
  try {
    const url = `${baseUrl}users/login`;

    const body = credencias;

    const res = await axios.post(url, body);

    saveDataStr('TOKEN_KEY', res.data?.token);
    saveData('DATA', res.data?.data);
    // todas as requisições posteriores incluiram o token
    // axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
    // axios.defaults.headers.common['x-auth-token'] = `${res.data.token}`;
    // saveData('USER_KEY', res.data?.user);

    return res.data;
  } catch (e) {
    if (e.response && e.response.status === 401) {
      return { error: e.response.data };
    }

    return { error: 'Ocorreu algum erro. ' };
  }
};

export const signUp = async (credencias) => {
  try {
    const url = 'https://pacemakers-back.herokuapp.com/users/signup';

    const body = credencias;

    const res = await axios.post(url, body);

    return res.data;
  } catch (e) {
    if (e.response && e.response.status === 401) {
      return { error: e.response.data };
    }

    return { error: 'Ocorreu algum erro. ' };
  }
};
