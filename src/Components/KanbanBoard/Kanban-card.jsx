/* eslint-disable react/prop-types */
import { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PersonIcon from "@/icons/PersonIcon";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AlarmIcon from "@mui/icons-material/Alarm";
import TableBarIcon from "@mui/icons-material/TableBar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MoreDatailsModal from "../Modals/MoreDetailsModal";
import InfoIcon from "@mui/icons-material/Info";

export function KanbanCard({ reserve, index, columnId }) {
  const [openModaDetails, setOpenModalDetails] = useState(false);
  const [reserveData, setReserveData] = useState(null);

  const getCardBorderClass = (columnId) => {
    switch (columnId) {
      case "1":
        return "border-l-4 border-l-yellow-400";
      case "2":
        return "border-l-4 border-l-blue-400";
      case "3":
        return "border-l-4 border-l-green-400";
      case "4":
        return "border-l-4 border-l-red-400";
      default:
        return "";
    }
  };

  return (
    <>
      <Draggable draggableId={reserve.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="mb-2"
          >
            <Card
              className={`${getCardBorderClass(columnId)} ${
                snapshot.isDragging ? "shadow-md" : ""
              } rounded-xl p-4 shadow hover:shadow-md transition transform hover:scale-105`}
            >
              <CardHeader className="p-3 pb-1">
                <CardTitle className="text-sm font-medium">
                  <span className="text-lime-500">{reserve.id}-</span>{" "}
                  {reserve.event_name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-1 space-y-4">
                <CardDescription className="text-xs">
                  <span className="text-lime-500">Tipo de evento:</span>{" "}
                  {reserve.type_event}
                </CardDescription>
                <CardDescription className="text-xs flex">
                  <span className="text-lime-500">Capacidad:</span>
                  <strong className="ml-1">{reserve.capacity}</strong>
                </CardDescription>

                <div className="grid grid-cols-3 justify-items-center gap-2 text-sm">
                  <Tooltip>
                    <TooltipTrigger>
                      <CardDescription className="text-xs">
                        <CalendarMonthIcon className="text-blue-500" />{" "}
                        {reserve.reservation_date}
                      </CardDescription>
                    </TooltipTrigger>
                    <TooltipContent>Fecha de la reserva</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <CardDescription className="text-xs">
                        <AlarmIcon className="text-yellow-500" />{" "}
                        {`${reserve?.reservation_time.split(":")[0]}:${
                          reserve?.reservation_time.split(":")[1]
                        }`}
                      </CardDescription>
                    </TooltipTrigger>
                    <TooltipContent>Hora de la reserva</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <CardDescription className="text-xs">
                        <TableBarIcon className="text-amber-700" />{" "}
                        {reserve.table}
                      </CardDescription>
                    </TooltipTrigger>
                    <TooltipContent>Mesa de la reserva</TooltipContent>
                  </Tooltip>
                </div>
                <CardDescription
                  className="text-xs"
                  onClick={() => {
                    setReserveData(reserve);
                    setOpenModalDetails(true);
                  }}
                >
                  <InfoIcon className="text-blue-700" /> Mas información
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>

      <MoreDatailsModal
        openModal={openModaDetails}
        closeModal={() => setOpenModalDetails(false)}
        data={reserveData}
      />
    </>
  );
}
