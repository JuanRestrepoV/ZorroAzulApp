import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalFloorSelection = ({
  closeFloorSelectionModal,
  selectedFloor,
  setSelectedFloor,
  floors,
  goBack,
}) => {
  const navigate = useNavigate();

  const handleFloorSelection = (floor) => {
    setSelectedFloor(floor);
  };

  const isSelected = (floor) => selectedFloor === floor;

  const handleNext = () => {
    if (selectedFloor.name === "PISO 11") {
      localStorage.setItem("selectedFloor", selectedFloor.id);
      navigate("/piso-11");
    } else if (selectedFloor.name === "PISO 12") {
      localStorage.setItem("selectedFloor", selectedFloor.id);
      navigate("/piso-12");
    } else {
      alert("Por favor selecciona un piso disponible.");
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay"))
          closeFloorSelectionModal();
      }}
    >
      <div
        className="bg-black p-6 rounded-lg shadow-lg w-96 relative modal-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={goBack}
          className="absolute top-2 left-2 text-gray-400 hover:text-gray-600"
        >
          ←
        </button>

        <button
          onClick={closeFloorSelectionModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-lg text-white font-medium mb-4 text-center">
          Selecciona el piso
        </h2>
        <hr className="border-t-2 border-lime-500 mb-4" />

        <div className="grid grid-cols-1 gap-4">
          {floors.map((floor) => (
            <div
              key={floor.id}
              onClick={() => handleFloorSelection(floor)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                isSelected(floor.name)
                  ? "bg-black text-white border-lime-500"
                  : "bg-gray-500 text-white border-white hover:bg-black hover:border-lime-500"
              }`}
            >
              <img
                src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt={floor.name}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="text-center font-medium">{floor.name}</h3>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`w-full mt-6 py-2 rounded-lg font-semibold transition-all ${
            selectedFloor
              ? "bg-lime-500 text-white hover:bg-lime-600"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!selectedFloor}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalFloorSelection;
