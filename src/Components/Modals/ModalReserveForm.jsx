import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ModalReserveForm = ({
  closeReserveModal,
  openServiceModal,
  name,
  setName,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  validationMessage,
}) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeReserveModal();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay"
      onClick={handleClickOutside} // Cierra el modal al hacer clic fuera
    >
      <div className="bg-black text-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Flecha para ir hacia atrás */}
        <button
          onClick={closeReserveModal}
          className="absolute top-2 left-2 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Botón de cerrar */}
        <button
          onClick={closeReserveModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-lg font-semibold mb-4 text-center">Crea tu nueva reserva</h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        {/* Formulario */}
        <form className="space-y-6">
          {/* Campo Nombre */}
          <div>
            <label className="block text-sm font-semibold mb-2">Nombre</label>
            <input
              type="text"
              placeholder="Nombre de quien reserva"
              className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Fecha y Hora alineados horizontalmente */}
          <div className="flex items-center justify-between space-x-4">
            {/* Campo Fecha */}
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-2 text-center">Fecha</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Seleccione"
                className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
                popperPlacement="bottom"
                popperModifiers={[
                  {
                    name: "preventOverflow",
                    options: {
                      boundary: "viewport",
                    },
                  },
                ]}
              />
            </div>

            {/* Campo Hora */}
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-2 text-center">Hora</label>
              <DatePicker
                selected={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Hora"
                dateFormat="h:mm aa"
                placeholderText="Seleccione"
                className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
                popperPlacement="bottom"
                popperModifiers={[
                  {
                    name: "preventOverflow",
                    options: {
                      boundary: "viewport",
                    },
                  },
                ]}
              />
            </div>
          </div>

          {/* Mensaje de validación */}
          {validationMessage && (
            <p className="text-red-500 text-sm text-center">{validationMessage}</p>
          )}

          {/* Botón siguiente */}
          <button
            type="button"
            onClick={openServiceModal}
            className="w-full py-2 bg-lime-500 text-black font-semibold rounded hover:bg-lime-600 transition-all cursor-pointer"
          >
            Siguiente...
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalReserveForm;
