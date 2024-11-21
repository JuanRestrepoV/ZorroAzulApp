import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Navbar/Layout";
import ModalCardDetails from "../../Components/Modals/ModalCardDetails";
import ModalReserveForm from "../../Components/Modals/ModalReserveForm";
import ModalAdditionalServices from "../../Components/Modals/ModalAdditionalServices";

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
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  const openModal = (card) => setSelectedCard(card);

  const closeModal = () => {
    setSelectedCard(null);
    setIsReserveModalOpen(false);
    setIsServiceModalOpen(false);
  };

  const openReserveModal = () => {
    if (!selectedCard) {
      setValidationMessage("Por favor selecciona un evento para reservar.");
      return;
    }
    setIsReserveModalOpen(true);
    setValidationMessage("");
  };

  const closeReserveModal = () => {
    setIsReserveModalOpen(false);
    setValidationMessage("");
  };

  const openServiceModal = () => {
    if (name && selectedDate && selectedTime) {
      setIsServiceModalOpen(true);
      setIsReserveModalOpen(false);
      setValidationMessage("");
    } else {
      setValidationMessage("Por favor completa el nombre, fecha y hora antes de continuar.");
    }
  };

  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
    setValidationMessage("");
  };

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const confirmReservation = async () => {
    if (!selectedCard) {
      setValidationMessage("Por favor selecciona un evento antes de confirmar la reserva.");
      return;
    }

    if (selectedServices.length > 0) {
      try {
        const response = await fetch("http://localhost:5000/reservations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: 1, // Cambia esto por el ID real del usuario autenticado
            event_id: selectedCard.id,
            date: selectedDate,
            time: selectedTime,
            services: selectedServices,
          }),
        });

        if (response.ok) {
          navigate("/confirmacion");
        } else {
          const error = await response.json();
          setValidationMessage(`Error: ${error.error}`);
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      }
    } else {
      setValidationMessage("Selecciona al menos un servicio para confirmar la reserva.");
    }
  };

  const goBack = () => {
    if (isServiceModalOpen) {
      setIsServiceModalOpen(false);
      setIsReserveModalOpen(true);
    } else if (isReserveModalOpen) {
      setIsReserveModalOpen(false);
      setSelectedCard(null);
    } else {
      setSelectedCard(null);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        {/* Fondo de la página */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-md"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1317370/pexels-photo-1317370.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-4 text-white">DashBoard</h1>
          <div className="grid grid-cols-2 gap-4">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-gray-200 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(card)}
              >
                <img src={card.image} alt={card.title} className="w-full h-32 object-cover rounded" />
                <h2 className="text-lg font-bold mt-2">{card.title}</h2>
                <p className="text-sm">{card.capacity}</p>
                <p className="text-sm">
                  {card.description.length > 50
                    ? `${card.description.slice(0, 50)}...`
                    : card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modals */}
        <ModalCardDetails
          selectedCard={selectedCard}
          closeModal={closeModal}
          openReserveModal={openReserveModal}
          goBack={goBack}
        />
        {isReserveModalOpen && (
          <ModalReserveForm
            closeReserveModal={closeReserveModal}
            openServiceModal={openServiceModal}
            goBack={goBack}
            name={name}
            setName={setName}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            validationMessage={validationMessage}
          />
        )}
        {isServiceModalOpen && (
          <ModalAdditionalServices
            closeServiceModal={closeServiceModal}
            confirmReservation={confirmReservation}
            goBack={goBack}
            selectedServices={selectedServices}
            toggleService={toggleService}
            validationMessage={validationMessage}
          />
        )}
      </div>
    </Layout>
  );
}

export default DashBoard;
