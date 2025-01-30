import axios from 'axios';

const urlBack = import.meta.env.VITE_URL_BACK;

export const getAditionalServices = async () => {
    return await axios.get(`${urlBack}/events/api/getAditionalServices/`);
}