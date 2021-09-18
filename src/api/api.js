import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.184:5800',
});

export default instance;
