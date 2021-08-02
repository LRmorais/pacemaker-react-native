import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pacemaker-db.herokuapp.com/users/',
});

export default api;
