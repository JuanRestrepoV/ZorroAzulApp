"use client";

import { useState } from "react";
import { useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { KanbanColumn } from "./kanban-column";
import {
  patchReserve,
  getReservesPending,
  getReservesInProcess,
  getReservesConfirmed,
  getReservesCancelled,
} from "../../../services/reserves";
import { toast } from "sonner"
import { useLoader } from "@/context/Loader";

const RESERVES_PER_PAGE = 5;

export default function KanbanBoard() {
  const [columns, setColumns] = useState([
    { id: "1", title: "Pendiente", reserves: [], totalReserves: 0 },
    { id: "2", title: "En proceso", reserves: [], totalReserves: 0 },
    { id: "3", title: "Confirmada", reserves: [], totalReserves: 0 },
    { id: "4", title: "Cancelada", reserves: [], totalReserves: 0 },
  ]);
  const [pages, setPages] = useState({
    pending: 1,
    inProcess: 1,
    confirmed: 1,
    cancelled: 1,
  });
  const [reload, setReload] = useState(false);
  const { showSpinner, hideSpinner } = useLoader();

  const fetchReservesPending = async () => {

    try {
      showSpinner();
      const response = await getReservesPending(pages.pending);
      hideSpinner();
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.id === "1"
            ? {
                ...col,
                currentPage: pages.pending,
                totalReserves: response.count,
                reserves: response.results,
              }
            : col
        )
      );
    } catch (error) {
      console.error("Error fetching pending reserves:", error);
    }
  };

  const fetchReservesInProcess = async () => {

    try {
      showSpinner();
      const response = await getReservesInProcess(pages.inProcess);
      hideSpinner();
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.id === "2"
            ? {
                ...col,
                currentPage: pages.inProcess,
                totalReserves: response.count,
                reserves: response.results,
              }
            : col
        )
      );
    } catch (error) {
      console.error("Error fetching in-process reserves:", error);
    }
  };

  const fetchReservesConfirmed = async () => {

    try {
      showSpinner();
      const response = await getReservesConfirmed(pages.confirmed);
      hideSpinner();
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.id === "3"
            ? {
                ...col,
                currentPage: pages.confirmed,
                totalReserves: response.count,
                reserves: response.results,
              }
            : col
        )
      );
    } catch (error) {
      hideSpinner();
      console.error("Error fetching confirmed reserves:", error);
    }
  };

  const fetchReservesCancelled = async () => {

    try {
      showSpinner();
      const response = await getReservesCancelled(pages.cancelled);
      hideSpinner();
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.id === "4"
            ? {
                ...col,
                currentPage: pages.cancelled,
                totalReserves: response.count,
                reserves: response.results,
              }
            : col
        )
      );
    } catch (error) {
      hideSpinner();
      console.error("Error fetching cancelled reserves:", error);
    }
  };

  useEffect(() => {
    fetchReservesPending();
  }, [pages.pending, reload]);

  useEffect(() => {
    fetchReservesInProcess();
  }, [pages.inProcess, reload]);

  useEffect(() => {
    fetchReservesConfirmed();
  }, [pages.confirmed, reload]);

  useEffect(() => {
    fetchReservesCancelled();
  }, [pages.cancelled, reload]);

  const changePage = (columnId, newPage) => {
    let status;
    if (columnId === "1") status = "pending";
    else if (columnId === "2") status = "in-process";
    else if (columnId === "3") status = "confirmed";
    else if (columnId === "4") status = "cancelled";

      setPages((prevPages) => ({
          ...prevPages,
          [status]: newPage, // Solo cambia la página de la columna seleccionada
        }));
        console.log(pages);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    showSpinner();
    patchReserve(draggableId, {
      id_reserve_status: destination.droppableId,
    }).then(() => {
      setReload(!reload);
      hideSpinner();
      toast.success("Reserva actualizada correctamente")
    }).catch((error) => {
      hideSpinner();
      toast.error("Error al actualizar la reserva")
      console.error(error)
    })
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Tareas</h2>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map((column) => (
            <KanbanColumn
              key={column.title}
              column={column}
              reservesPerPage={RESERVES_PER_PAGE}
              onChangePage={(newPage) => changePage(column.id, newPage)}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
