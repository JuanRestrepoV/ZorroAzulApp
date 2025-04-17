import axios from 'axios';

const urlBack = import.meta.env.VITE_URL_BACK;

export const getFloors = async () => {
    return await axios.get(`${urlBack}/events/api/getFloors/`);
}

export const getFloor = async (floor_id) => {
    return await axios.get(`${urlBack}/events/api/getFloors/${floor_id}/`);
}

export const getTablesFloor = async (idFloor) => {
    return await axios.get(`${urlBack}/events/api/getTables/${idFloor}/`);
}