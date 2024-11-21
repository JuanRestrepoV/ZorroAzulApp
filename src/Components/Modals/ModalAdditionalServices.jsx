import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ModalAdditionalServices = ({
  closeServiceModal,
  confirmReservation,
  selectedServices,
  toggleService,
  validationMessage,
  goBack,
}) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeServiceModal(); // Cierra el modal si haces clic fuera
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay"
      onClick={handleClickOutside}
    >
      <div className="bg-black text-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Flecha para ir hacia atrás */}
        <button
          onClick={goBack}
          className="absolute top-2 left-2 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Botón de cerrar */}
        <button
          onClick={closeServiceModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>

        {/* Contenido del modal */}
        <h2 className="text-lg font-semibold mb-4 text-center">Servicios adicionales</h2>
        <hr className="border-t-2 border-lime-500 mb-4" />
        <div className="space-y-2">
          {["Pantalla Gigante", "Micrófono", "Proyección edificio", "Bebidas personalizadas", "Soporte audiovisual", "DJ"].map((service, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
              />
              <p className="text-sm">{service}</p>
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
