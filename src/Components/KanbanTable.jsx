import React, { useEffect, useState } from "react";
import { getReserves } from "../../services/reserves";
import backgroundImage from "../Assets/dashboardBackground.png";
import PersonIcon from '../icons/PersonIcon';
import { Tooltip } from '@nextui-org/react';

const KanbanTable = () => {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getReserves().then((response) => {
      setReservas(response.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="loader border-t-2 border-black rounded-full w-10 h-10 animate-spin"></div>
        <span className="ml-2 text-black text-5xl">Cargando reservas...</span>
      </div>
    )
  }

  const renderColumn = (title, bgColor, reservas) => (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4">
      <div className={`flex justify-between items-center py-2 px-4 ${bgColor} rounded-md text-white`}>
        <h3 className="font-Fuente  text-white text-lg">{title}</h3>
        <div className="text-sm font-medium">{reservas.length}</div>
      </div>
      <div className="mt-4 space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {reservas.map((data) => (
          <div key={data.id} className="p-3 bg-gray-100 rounded-lg shadow-sm border border-gray-200 flex flex-col gap-2">
            <div className="flex flex-col">
              <h1 className="text-[11px] font-Fuente text-red-600">Nombre:</h1>
              <p className="text-sm font-medium text-gray-700">{data.event_name}</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[11px] font-Fuente text-red-600">Tipo de evento:</h1>
              <p className="text-sm font-medium text-gray-700">{data.type_event}</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[11px] font-Fuente text-red-600">Rango de horas:</h1>
              <p className="text-sm font-medium text-gray-700">{data.rangehour}</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[11px] font-Fuente text-red-600">Ubicación:</h1>
              <p className="text-sm font-medium text-gray-700">{data.floor_name}</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[11px] font-Fuente text-red-600">A nombre de:</h1>
              <p className="text-sm font-medium text-gray-700">{data.user}</p>
            </div>
            <div className="flex">
              <h1 className="text-[11px] font-Fuente text-red-600">Capacidad:</h1>
              {[...Array(data.capacity)].map((_, index) => (
                <PersonIcon key={index} className="text-gray-700" />
              ))}
            </div>
            <Tooltip content={
              <div className="bg-white rounded-lg shadow-md p-4">
                {  data.event_services.map((service, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <span className="text-xs font-semibold">{service}</span>
                  </div>
                ))}
              </div>
            } color="primary">
              <div className="cursor-pointer text-red-600 flex justify-end">
                <span className="text-xs font-semibold">Ver servicios</span>
              </div>
            </Tooltip>
            {/* <div className="w-full flex justify-end">
              <h1 className="text-[11px] font-Fuente text-red-600">Servicios</h1>
            </div> */}
            {/* <p className="text-sm font-medium text-gray-700">{data.event_name}</p> */}
          </div>
        ))}
        {reservas.length === 0 && (
          <div className="flex justify-center items-center h-20 bg-gray-50 rounded-md border border-dashed border-gray-300">
            <p className="text-gray-500">No items</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4"> {/* Centraliza el contenido */}
      {/* Buscador */}
      <div className="mb-6 flex justify-between items-center w-full max-w-6xl">
        <label htmlFor="filter" className="font-medium text-gray-700 mr-2">Filtrar por estado:</label>
        <select
          id="filter"
          className="border border-gray-300 rounded-md p-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="Pendiente">Pendiente</option>
          <option value="En proceso">En proceso</option>
          <option value="Confirmada">Confirmada</option>
          <option value="Cancelada">Cancelada</option>
        </select>
      </div>

      {/* Tablero Kanban */}
      <div className="grid grid-cols-4 gap-6 w-full max-w-6xl">
        {renderColumn("Pendiente", "bg-red-500", reservas?.['PENDIENTE'])}
        {renderColumn("En proceso", "bg-yellow-500", reservas?.['EN PROCESO'])}
        {renderColumn("Confirmada", "bg-green-500", reservas?.['CONFIRMADA'])}
        {renderColumn("Cancelada", "bg-gray-500", reservas?.['CANCELADA'])}
      </div>
    </div>
  );
};

export default KanbanTable;
