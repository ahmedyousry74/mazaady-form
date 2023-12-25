import axios from 'axios';

export default defineNuxtPlugin(async () => {
  axios.defaults.baseURL = 'https://staging.mazaady.com/api/v1/';
  axios.defaults.headers.common['Authorization'] = `Bearer 3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16`;

  return {
    provide: {
      axios: axios,
    },
  };
});
