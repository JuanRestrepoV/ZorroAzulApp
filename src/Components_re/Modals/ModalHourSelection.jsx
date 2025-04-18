import React, { useState } from "react";

const ModalHourSelection = ({
  closeHourSelectionModal,
  openCapacityModal,
  selectedTimeSlot,
  setSelectedHourRange,
  selectedHourRange,
  goBack,
}) => {
  // Ejemplo de horarios según la franja horaria seleccionada
  const hourRanges = {
    Mañana: ["9:00 AM - 11:00 AM", "11:30 AM - 1:30 PM"],
    Tarde: ["2:00 PM - 4:00 PM", "4:30 PM - 6:30 PM"],
    Noche: ["7:00 PM - 9:00 PM", "9:30 PM - 11:30 PM"],
  };

  const handleHourRangeClick = (range) => {
    setSelectedHourRange(range); // Establece el rango de horas seleccionado
  };

  const isSelected = (range) => selectedHourRange === range;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) closeHourSelectionModal();
      }}
    >
      <div
        className="bg-black p-6 rounded-lg shadow-lg w-96 relative modal-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de retroceso */}
        <button
          onClick={goBack}
          className="absolute top-2 left-2 text-gray-600 hover:text-gray-800"
        >
          ←
        </button>

        {/* Botón de cerrar */}
        <button
          onClick={closeHourSelectionModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-lg text-white font-medium mb-4 text-center">
          Selecciona un rango de horas
        </h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        {/* Opciones de rango de horas */}
        <div className="flex flex-col space-y-4">
          {hourRanges[selectedTimeSlot]?.map((range) => (
            <button
              key={range}
              onClick={() => handleHourRangeClick(range)}
              className={`px-4 py-2 rounded-lg text-center font-semibold border-2 transition-all ${
                isSelected(range)
                  ? "bg-black text-white border-lime-500"
                  : "bg-gray-500 text-white border-white hover:bg-black hover:border-lime-500"
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Botón de siguiente */}
        <button
  onClick={openCapacityModal}
  className={`w-full mt-6 py-2 rounded-lg font-semibold transition-all ${
    selectedHourRange
      ? "bg-lime-500 text-white hover:bg-lime-600"
      : "bg-gray-400 text-gray-700 cursor-not-allowed"
  }`}
  disabled={!selectedHourRange} // Deshabilitar si no hay selección
>
  Siguiente
</button>
      </div>
    </div>
  );
};

export default ModalHourSelection;
