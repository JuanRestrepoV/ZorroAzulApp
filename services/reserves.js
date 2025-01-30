import axios from 'axios';

const urlBack = import.meta.env.VITE_URL_BACK;

export const createReserve = async (data) => {
    return await axios.post(`${urlBack}/reserves/api/Reserves/`, data);
}

export const getReserves = async () => {
    return await axios.get(`${urlBack}/reserves/api/Reserves/`);
}