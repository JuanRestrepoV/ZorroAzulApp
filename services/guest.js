import axios from 'axios';

const urlBack = import.meta.env.VITE_URL_BACK;

export const getGuestIdentTypes = async () => {
    return await axios.get(`${urlBack}/reserves/api/identTypes/`);
}