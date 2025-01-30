import axios from 'axios';

const urlBack = import.meta.env.VITE_URL_BACK;

export const getFloors = async () => {
    return await axios.get(`${urlBack}/events/api/getFloors/`);
}