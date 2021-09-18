import axios from 'axios';

const setAPIBaseUrl = () => {
  const baseUrl = 'http://33adc51127a6.ngrok.io';

  axios.defaults.baseURL = baseUrl;
};

export default setAPIBaseUrl;
