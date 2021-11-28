/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { getDataStg, saveDataStr, saveData } from '../helpers/Storage';
import api from './api';

const baseUrl = 'https://pacemakers-back.herokuapp.com';

export const isAuthenticated = () => getDataStg('TOKEN_KEY') !== null;

export const changeNewPassword = async (data) => {
  const token = data.storagedToken;
  try {
    const url = `${baseUrl}/users/update/${data.id}`;

    const body = {
      password: data.password,
    };

    const res = await axios.patch(url, body, {
      headers: { 'x-access-token': `${token}` },
    });

    return res.data;
  } catch (e) {
    if (e.response && e.response.status === 401) {
      return { error: e.response.data };
    }
    return { error: 'Ocorreu algum erro. ' };
  }
};
export const completeRegistration = async (data) => {
  const token = data.storagedToken;
  try {
    const url = `${baseUrl}/users/submit/${data.id}`;

    const body = data.data;

    const res = await axios.patch(url, body, {
      headers: { 'x-access-token': `${token}` },
    });

    return res.data;
  } catch (e) {
    if (e.response && e.response.status === 401) {
      return { error: e.response.data };
    }
    return { error: 'Ocorreu algum erro. ' };
  }
};
