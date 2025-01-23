import React, { useState } from "react";

const KanbanTable = () => {
  const dummyReservas = [
    { id: '1', status: 'Pendiente', title: 'Reserva 1' },
    { id: '2', status: 'En proceso', title: 'Reserva 2' },
    { id: '3', status: 'Confirmada', title: 'Reserva 3' },
    { id: '4', status: 'Cancelada', title: 'Reserva 4' },
  ];

  const [filter, setFilter] = useState("");

  const filteredReservas = dummyReservas.filter(
    (reserva) => filter === "" || reserva.status === filter
  );

  const pendiente = filteredReservas.filter((item) => item.status === "Pendiente");
  const enProceso = filteredReservas.filter((item) => item.status === "En proceso");
  const confirmada = filteredReservas.filter((item) => item.status === "Confirmada");
  const cancelada = filteredReservas.filter((item) => item.status === "Cancelada");

  const renderColumn = (title, bgColor, reservas) => (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4">
      <div className={`flex justify-between items-center py-2 px-4 ${bgColor} rounded-md text-white`}>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="text-sm font-medium">{reservas.length}</div>
      </div>
      <div className="mt-4 space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {reservas.map((data) => (
          <div key={data.id} className="p-3 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
            <p className="text-sm font-medium text-gray-700">{data.title}</p>
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
      <div className="mb-6 flex justify-between items-center w-full max-w-4xl">
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
      <div className="grid grid-cols-4 gap-6 w-full max-w-4xl">
        {renderColumn("Pendiente", "bg-red-500", pendiente)}
        {renderColumn("En proceso", "bg-yellow-500", enProceso)}
        {renderColumn("Confirmada", "bg-green-500", confirmada)}
        {renderColumn("Cancelada", "bg-gray-500", cancelada)}
      </div>
    </div>
  );
};

export default KanbanTable;
