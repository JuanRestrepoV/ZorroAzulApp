import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEvents } from "../../../services/events";
import { getFloors } from "../../../services/floors";
import { useLoader } from "@/context/Loader";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Modal, ModalContent } from "@heroui/modal";
import ReservationForm from "@/components/Reservations/ReservationForm";
import { motion, AnimatePresence } from "framer-motion";

function DashBoard() {
  const [events, setEvents] = useState([]);
  const [floors, setFloors] = useState([]);
  const { showSpinner, hideSpinner } = useLoader();
  const [openModal, setOpenModal] = useState(false);
  const [eventSelected, setEventSelected] = useState(null);
  const [view, SetView] = useState("Home");

  useEffect(() => {
    showSpinner();
    Promise.all([getEvents(), getFloors()])
      .then(([events, floors]) => {
        setEvents(events.data);
        setFloors(floors.data);
        hideSpinner();
      })
      .catch((error) => {
        console.log(error);
        hideSpinner();
      });
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {view === "Home" && (
          <motion.div
            key="Home"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full"
          >
            <div className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 bg-[url('/src/Assets/dashboardBackground.png')] bg-black/30" />
            <div className="relative z-10 pt-24 px-4 pb-10  md:flex md:items-center md:justify-center">
              <div className="max-w-5xl mx-auto flex flex-col items-center justify-center w-full">
                <h1 className="text-3xl my-10 text-lime-500">EVENTOS</h1>
                <div className="w-full px-4">
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {events.map((card, index) => (
                      <Card
                        key={index}
                        isPressable
                        shadow="sm"
                        onPress={() => {
                          setEventSelected(card);
                          setOpenModal(true);
                        }}
                        className="shadow-lg bg-white/90 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                      >
                        <CardHeader className="p-3 pb-1 flex flex-col items-center">
                          <Image
                            src={card.image}
                            alt={card.title}
                            width={300}
                            height={200}
                            isBlurred
                            isZoomed
                            isRounded
                            removeWrapper
                          />
                        </CardHeader>

                        <CardBody className="p-3 pt-1 flex flex-col items-center">
                          <h2 className="text-md mt-2 text-center font-semibold">
                            {card.title}
                          </h2>
                          <p className="text-xs text-center text-gray-500">
                            {card.type_event}
                          </p>
                        </CardBody>

                        <CardFooter className="p-3 pt-0">
                          <p className="text-xs text-justify text-gray-600">
                            {card.short_description}
                          </p>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {view === "FomReservation" && (
          <motion.div
            key="FomReservation"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full"
          >
            <div className="p-4 w-full rounded shadow flex justify-center items-center bg-[url('/src/Assets/dashboardBackground.png')] bg-cover bg-center bg-no-repeat">
              <ReservationForm
                floors={floors}
                view={SetView}
                eventSelected={eventSelected}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal
        isOpen={openModal}
        onClose={setOpenModal}
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-slate-200 dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent className="w-[90%] max-w-4xl h-auto md:h-[500px] my-auto mx-auto rounded-xl ">
          <div className="flex flex-col md:flex-row gap-6 p-6 h-full">
            <div className="flex-shrink-0 w-full md:w-1/2 h-full">
              <Image
                src={eventSelected?.image}
                alt={eventSelected?.title}
                isBlurred
                radius="lg"
                isRounded
                removeWrapper
                // isZoomed
                className="md:w-full md:h-full object-cover w-80 h-60 bg-center bg-no-repeat"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
              <h1 className="text-xl font-semibold text-center text-lime-500">
                {eventSelected?.title}
              </h1>

              <p className="text-sm text-justify text-black">
                {eventSelected?.description || "Descripción del evento..."}
              </p>

              <h1 className="text-lime-500">Servicios incluidos</h1>
              <div className="flex gap-4">
                {eventSelected?.services.map((service) => (
                  <div
                    key={service.id}
                    className="flex flex-col gap-2 items-center"
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      isBlurred
                      radius="lg"
                      isRounded
                      removeWrapper
                      width={100}
                      height={100}
                      isZoomed
                    />
                    <p className="text-lime-500">{service.name}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setOpenModal(false);
                  SetView("FomReservation");
                }}
                className="w-full mt-6 py-2 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition-all shadow-lg"
              >
                Reservar
              </button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default DashBoard;
