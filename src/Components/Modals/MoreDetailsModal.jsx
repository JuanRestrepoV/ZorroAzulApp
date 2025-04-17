/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FeedIcon from "@mui/icons-material/Feed";
import BusinessIcon from "@mui/icons-material/Business";
import RoomServiceIcon from "@mui/icons-material/RoomService";

export default function MoreDetailsModal({ openModal, closeModal, data }) {
  return (
    <Modal
      isOpen={openModal}
      onClose={closeModal}
      className="w-full h-full relative"
    >
      <ModalContent className="md:w-auto w-96 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ModalHeader className="flex justify-center items-center uppercase text-lime-500">
          Más detalles
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold flex items-center gap-2">
              <FeedIcon className="text-green-500" /> Datos del cliente:
            </h1>
            <div className="mx-10 space-y-4">
              <p>
                <span className="text-lime-500">Nombre:</span>{" "}
                {data?.guest.full_name}
              </p>
              <p>
                <span className="text-lime-500">Identificación:</span>{" "}
                {`${data?.guest.ident_type.name} ${data?.guest.identification}`}
              </p>
              <p>
                <span className="text-lime-500">Telefono:</span> {data?.guest.phone_number}
              </p>
              <p>
                <span className="text-lime-500">Email:</span> {data?.guest.email}
              </p>
            </div>
          </div>

          <Separator className="my-4 h-[1px] bg-gray-300" />

          <div>
            <h1 className="font-bold flex items-center gap-2">
              <BusinessIcon className="text-blue-500" /> Reserva:
            </h1>
            <div className="mx-10 space-y-4">
              <p>
                <span className="text-lime-500">Piso:</span>{" "}
                {data?.floor_name.split(" ")[1]}
              </p>
              <p>
                <span className="text-lime-500">Fecha de la reserva:</span>{" "}
                {new Date(data?.reservation_date).toLocaleDateString("es-CO")}
              </p>
            </div>
          </div>

          <Separator className="my-4 h-[1px] bg-gray-300" />

          <div className="flex flex-col gap-2">
            <h1 className="font-bold flex items-center gap-2">
              <RoomServiceIcon className="text-yellow-500" /> Servicios:
            </h1>
            <div className="mx-10 space-y-4">
              {data?.event_services.map((service, index) => (
                <ul
                  key={index}
                  className="list-disc list-inside marker:text-lime-500"
                >
                  <li>{service}</li>
                </ul>
              ))}
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={closeModal}
            className="btn btn-secondary bg-lime-500 text-white"
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
