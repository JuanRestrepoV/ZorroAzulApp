import axios from "axios";

const urlBack = import.meta.env.VITE_URL_BACK;

export const createReserve = async (data) => {
  return await axios.post(`${urlBack}/reserves/api/Reserves/`, data);
};

export const getReserves = async (estado, page = 1, pageSize = 2) => {
  try {
    const response = await axios.get(
      `${urlBack}/reserves/api/getReserves/?page=${page}&page_size=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener reservas", error);
    return { results: [], next: null };
  }
};

export const getReservesStatus = async () => {
  try {
    const response = await axios.get(`${urlBack}/reserves/api/ReserveStatus/`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener estados de reservas", error);
    return { results: [], next: null };
  }
};

export const getReservesPending = async (page = 1) => {
  try {
    const response = await axios.get(`${urlBack}/reserves/api/pendiente/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener reservas pendientes", error);
    return { results: [], next: null };
  }
};

export const getReservesInProcess = async (page = 1) => {
  try {
    const response = await axios.get(`${urlBack}/reserves/api/en-proceso/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener reservas en proceso", error);
    return { results: [], next: null };
  }
};

export const getReservesConfirmed = async (page = 1) => {
  try {
    const response = await axios.get(`${urlBack}/reserves/api/confirmada/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener reservas confirmadas", error);
    return { results: [], next: null };
  }
};

export const getReservesCancelled = async (page = 1) => {
  try {
    const response = await axios.get(`${urlBack}/reserves/api/cancelada/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener reservas canceladas", error);
    return { results: [], next: null };
  }
};

export const patchReserve = async (id, data) => {
  try {
    const response = await axios.patch(`${urlBack}/reserves/api/patchReserves/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener reservas", error);
    return { results: [], next: null };
  }
};

