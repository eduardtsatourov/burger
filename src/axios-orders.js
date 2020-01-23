import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-454da.firebaseio.com/'
});

export default instance;

