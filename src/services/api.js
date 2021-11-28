import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pacemakers-back.herokuapp.com/',

});

export default api;
