import React, { useEffect } from "react";
import { getAditionalServices } from "../../../services/services";

const ModalAdditionalServices = ({
  closeServiceModal,
  confirmReservation,
  selectedServices,
  toggleService,
  validationMessage,
  aditionalServices,
}) => {
  console.log(selectedServices)
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      console.log("Haciendo clic fuera del modal, cerrando..."); // Debug: Click fuera
      closeServiceModal();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay"
      onClick={handleClickOutside}
    >
      <div className="bg-black text-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Botón de cerrar */}
        <button
          onClick={closeServiceModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>

        {/* Contenido del modal */}
        <h2 className="text-lg font-medium mb-4 text-center">Servicios adicionales</h2>
        <hr className="border-t-2 border-lime-500 mb-4" />
        <div className="space-y-2">
          { aditionalServices.map((service, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
              />
              <p className="text-sm">{service.name}</p>
            </label>
          ))}
        </div>
        {validationMessage && (
          <p className="text-red-500 text-sm text-center mt-2">{validationMessage}</p>
        )}
        <button
          onClick={confirmReservation}
          className="w-full mt-4 py-2 bg-lime-500 text-black font-semibold rounded hover:bg-lime-600 transition-all cursor-pointer"
        >
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
};

export default ModalAdditionalServices;
