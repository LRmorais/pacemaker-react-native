import axios from 'axios';
import { getDataStg, saveDataStr } from '../helpers/Storage';
import api from './api';

const baseUrl = process.env.REACT_APP_API_URL;

export const isAuthenticated = () => getDataStg('TOKEN_KEY') !== null;

export const signIn = async (credencias) => {
  try {
    const url = 'https://pacemaker-db.herokuapp.com/users/login';
    // const url = 'users/login';
    const body = credencias;

    const res = await axios.post(url, body);
    console.log(res);
    saveDataStr('TOKEN_KEY', res.data?.token);
    // todas as requisições posteriores incluiram o token
    api.defaults.headers.Authorization = `Bearer ${res.data.token}`;
    // saveData('USER_KEY', res.data?.user);

    return res.data;
  } catch (e) {
    if (e.response && e.response.status === 401) {
      return { error: e.response.data };
    }

    return { error: 'Ocorreu algum erro. ' };
  }
};
