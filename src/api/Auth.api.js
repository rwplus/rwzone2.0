import httpClient from './HttpClient';

const END_POINT = '/auth';

const login = payload => httpClient.get(END_POINT, {params: payload});

const register = payload => httpClient.post('auth/register',payload);

const recoveryAccount = payload => httpClient.post('/auth/recovery',payload);

const resetPassword = payload => httpClient.post('/auth/resetpassword',payload);

export {
    login,
    register,
    recoveryAccount,
    resetPassword
}