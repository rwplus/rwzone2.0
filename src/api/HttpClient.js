import axios from 'axios';

//const VUE_APP_BASE_URL_DEV='http://localhost:9000/api/v1'

const httpClient = axios.create({
    baseURL: (process.env.NODE_ENV == 'development') ? process.env.VUE_APP_BASE_URL_DEV : process.env.VUE_APP_BASE_URL_PRO,
    //baseURL: (process.env.NODE_ENV == 'development') ? 'http://localhost:9000/api/v1' : process.env.VUE_APP_BASE_URL_PRO,
    headers: {
        "Content-Type": "application/json",
    }
});

const getAuthToken = () => localStorage.getItem('token');

const authInterceptor = (config) => {
    config.headers['Authorization'] = getAuthToken();
    return config;
}

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;




