import axios from 'axios';

const urlBack = import.meta.env.VITE_URL_BACK;

export const loginUser = async (email, password) => {
    return await axios.post(`${urlBack}/auth/api/login/`, { email, password }, {
        withCredentials: true,
    });
}

export const registerUserData = async (username, email, password) => {
    return await axios.post(`${urlBack}/auth/api/register/`, { username, email, password }, {
        withCredentials: true,
    });
}