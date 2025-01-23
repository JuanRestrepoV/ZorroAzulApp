import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ModalDateSelection({ openFloorSelectionModal, closeDateSelectionModal, setSelectedDate }) {
  const [localSelectedDate, setLocalSelectedDate] = useState(null); // Estado local para manejar la fecha seleccionada

  const handleDateChange = (date) => {
    setLocalSelectedDate(date);
    setSelectedDate(date); // Actualiza la fecha en el estado principal
  };

  const handleContinue = () => {
    if (localSelectedDate) {
      openFloorSelectionModal(); // Avanza al siguiente modal
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) {
          closeDateSelectionModal(); // Cierra el modal si se hace clic fuera
        }
      }}
    >
      <div
        className="bg-black p-6 rounded-lg shadow-lg w-96 relative modal-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={closeDateSelectionModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-lg text-white font-semibold mb-4 text-center">
          Selecciona una fecha
        </h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        {/* Calendario */}
        <div className="flex justify-center mb-4">
          <DatePicker
            id="reservation-date" // Agregado un id único
            name="reservation-date" // Agregado un name único
            selected={localSelectedDate}
            onChange={handleDateChange} // Actualiza la fecha seleccionada
            inline
            minDate={new Date()}
            className="text-black"
          />
        </div>

        {/* Botón de confirmar */}
        <button
          onClick={handleContinue}
          className={`w-full py-2 font-semibold rounded transition-all ${
            localSelectedDate
              ? "bg-lime-500 text-white hover:bg-lime-600"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
          disabled={!localSelectedDate} // Desactiva el botón si no hay fecha seleccionada
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default ModalDateSelection;
