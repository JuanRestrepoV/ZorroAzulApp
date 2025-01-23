import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Navbar/Layout";
import ModalCardDetails from "../../Components/Modals/ModalCardDetails";
import ModalTimeSlot from "../../Components/Modals/ModalTimeSlot";
import ModalHourSelection from "../../Components/Modals/ModalHourSelection";
import ModalCapacity from "../../Components/Modals/ModalCapacity";
import ModalFloorSelection from "../../Components/Modals/ModalFloorSelection";
import ModalDateSelection from "../../Components/Modals/ModalDateSelection";
import backgroundImage from "../../Assets/dashboardBackground.png";

const cardData = [
  {
    id: 1,
    title: "Ritos del fuego sagrado",
    capacity: "CUMPLEAÑOS",
    description:
      "Este paquete de cumpleaños te invita a celebrar un renacimiento especial, guiado por los ritos del fuego sagrado. Sumergete en una experiencia única y significativa.",
    image:
      "https://i.postimg.cc/DyJLb4qX/Foto-portada-paquete-2-cumplea-os.png",
    services: [
      { title: "Decoración Ancestral", image: "https://i.postimg.cc/fy5QGV6K/Foto-1-paquete-1-cumplea-os.png" },
      { title: "Aviso en Madera", image: "https://i.postimg.cc/qRh9mmLp/Foto-2-paquete-cumplea-os-1.png" },
      { title: "Postre y Tarjeta", image: "https://i.postimg.cc/52QL2Ln6/Foto-3-paquete-cumplea-os-1.png" },
    ],
    price: "$161.116",
  },
  {
    id: 2,
    title: "Sendero de las Estrellas",
    capacity: "Cumpleaños",
    description:
      "Embarcate en un viaje encantador con este paquete de cumpleaños, diseñado para guiar al homenajeado/a a través de un camino de sabiduría estelar y magia celestial.",
    image: "https://i.postimg.cc/wj1x58M3/Foto-cumplea-os-basico.png",
    services: [
      { title: "Decoración Ancestral", image: "https://i.postimg.cc/fy5QGV6K/Foto-1-paquete-1-cumplea-os.png" },
      { title: "Aviso en Madera", image: "https://i.postimg.cc/qRh9mmLp/Foto-2-paquete-cumplea-os-1.png" },
      { title: "Postre y Tarjeta", image: "https://i.postimg.cc/52QL2Ln6/Foto-3-paquete-cumplea-os-1.png" },
    ],
    price: "$161.116",
  },
];

function DashBoard() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isTimeSlotModalOpen, setIsTimeSlotModalOpen] = useState(false);
  const [isHourSelectionModalOpen, setIsHourSelectionModalOpen] = useState(false);
  const [isCapacityModalOpen, setIsCapacityModalOpen] =useState(false);
  const [isDateSelectionModalOpen, setIsDateSelectionModalOpen] = useState(false);
  const [isFloorSelectionModalOpen, setIsFloorSelectionModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedHourRange, setSelectedHourRange] = useState(null);
  const [selectedCapacity, setSelectedCapacity] = useState(0);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const navigate = useNavigate();

  const openModal = (card) => setSelectedCard(card);

  const closeModal = () => {
    setSelectedCard(null);
    setIsTimeSlotModalOpen(false);
    setIsHourSelectionModalOpen(false);
    setIsCapacityModalOpen(false);
    setIsDateSelectionModalOpen(false);
    setIsFloorSelectionModalOpen(false);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
    setSelectedHourRange(null);
    setSelectedCapacity(0);
    setSelectedFloor(null);
  };

  const openTimeSlotModal = () => {
    if (!selectedCard) {
      alert("Por favor selecciona un evento para reservar.");
      return;
    }
    setIsTimeSlotModalOpen(true);
  };

  const closeTimeSlotModal = () => setIsTimeSlotModalOpen(false);

  const openHourSelectionModal = () => {
    if (!selectedTimeSlot) {
      alert("Por favor selecciona una franja horaria antes de continuar.");
      return;
    }
    setIsHourSelectionModalOpen(true);
    setIsTimeSlotModalOpen(false);
  };

  const closeHourSelectionModal = () => setIsHourSelectionModalOpen(false);

  const openCapacityModal = () => {
    if (!selectedHourRange) {
      alert("Por favor selecciona un rango de horas antes de continuar.");
      return;
    }
    setIsCapacityModalOpen(true);
    setIsHourSelectionModalOpen(false);
  };

  const closeCapacityModal = () => setIsCapacityModalOpen(false);

  const openDateSelectionModal = () => {
    if (selectedCapacity <= 0) {
      alert("Por favor selecciona una cantidad válida de personas antes de continuar.");
      return;
    }
    setIsDateSelectionModalOpen(true);
    setIsCapacityModalOpen(false);
  };

  const closeDateSelectionModal = () => setIsDateSelectionModalOpen(false);

  const openFloorSelectionModal = () => {
    if (!selectedDate) {
      alert("Por favor selecciona una fecha antes de continuar.");
      return;
    }
    setIsFloorSelectionModalOpen(true);
    setIsDateSelectionModalOpen(false);
  };

  const closeFloorSelectionModal = () => setIsFloorSelectionModalOpen(false);

  const goBack = () => {
    if (isFloorSelectionModalOpen) {
      setIsFloorSelectionModalOpen(false);
      setIsDateSelectionModalOpen(true);
    } else if (isDateSelectionModalOpen) {
      setIsDateSelectionModalOpen(false);
      setIsCapacityModalOpen(true);
    } else if (isCapacityModalOpen) {
      setIsCapacityModalOpen(false);
      setIsHourSelectionModalOpen(true);
    } else if (isHourSelectionModalOpen) {
      setIsHourSelectionModalOpen(false);
      setIsTimeSlotModalOpen(true);
    } else if (isTimeSlotModalOpen) {
      setIsTimeSlotModalOpen(false);
      setSelectedCard(null);
    } else {
      setSelectedCard(null);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-start">
          <h1 className="text-3xl font-FuenteTitulos mb-6 text-white">EVENTOS</h1>
          <div className="grid grid-cols-2 gap-6">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-gray-200 p-2 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 aspect-square w-80"
                onClick={() => openModal(card)}
              >
                <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded" />
                <h2 className="text-md font-bold mt-2 text-center">{card.title}</h2>
                <p className="text-xs text-center font-semibold text-gray-500">{card.capacity}</p>
                <p className="text-xs text-justify mt-1">
                  {card.description.length > 50
                    ? `${card.description.slice(0, 50)}...`
                    : card.description}
                </p>
              </div>
            ))}
          </div>

        </div>


        {selectedCard && (
          <ModalCardDetails
            selectedCard={selectedCard}
            closeModal={closeModal}
            openReserveModal={openTimeSlotModal}
            goBack={goBack}
          />
        )}
        {isTimeSlotModalOpen && (
          <ModalTimeSlot
            closeTimeSlotModal={closeTimeSlotModal}
            openHourSelectionModal={openHourSelectionModal}
            setTimeSlot={setSelectedTimeSlot}
            selectedTimeSlot={selectedTimeSlot}
            goBack={goBack}
          />
        )}
        {isHourSelectionModalOpen && (
          <ModalHourSelection
            closeHourSelectionModal={closeHourSelectionModal}
            openCapacityModal={openCapacityModal}
            selectedTimeSlot={selectedTimeSlot}
            setSelectedHourRange={setSelectedHourRange}
            selectedHourRange={selectedHourRange}
            goBack={goBack}
          />
        )}
        {isCapacityModalOpen && (
          <ModalCapacity
            closeCapacityModal={closeCapacityModal}
            openDateSelectionModal={openDateSelectionModal}
            selectedCapacity={selectedCapacity}
            setSelectedCapacity={setSelectedCapacity}
            goBack={goBack}
          />
        )}
        {isDateSelectionModalOpen && (
          <ModalDateSelection
            closeDateSelectionModal={closeDateSelectionModal}
            openFloorSelectionModal={openFloorSelectionModal}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        )}
        {isFloorSelectionModalOpen && (
          <ModalFloorSelection
            closeFloorSelectionModal={closeFloorSelectionModal}
            openSpaceSelectionModal={() => navigate("/piso-11")}
            selectedFloor={selectedFloor}
            setSelectedFloor={setSelectedFloor}
            goBack={goBack}
          />
        )}
      </div>
    </Layout>
  );
}

export default DashBoard;
