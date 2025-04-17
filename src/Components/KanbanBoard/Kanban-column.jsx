/* eslint-disable react/prop-types */
"use client";

import { Droppable } from "@hello-pangea/dnd";
import { KanbanCard } from "./Kanban-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip"

export function KanbanColumn({
  column,
  reservesPerPage,
  onChangePage,
}) {
  const getColumnHeaderClass = (columnId) => {
    switch (columnId) {
      case "1":
        return "bg-yellow-100 border-yellow-300 text-yellow-800";
      case "2":
        return "bg-blue-100 border-blue-300 text-blue-800";
      case "3":
        return "bg-green-100 border-green-300 text-green-800";
      case "4":
        return "bg-red-100 border-red-300 text-red-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  const totalReserves = column.totalReserves ? column.totalReserves : 0;
  const totalPages = Math.ceil(totalReserves / reservesPerPage);
  const visibleTasks = column.reserves

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onChangePage(page);
    }
  };

  return (
    <div className="flex flex-col h-full bg-muted/40 rounded-lg border shadow-sm overflow-visible relative ">
      <div
        className={`p-3 rounded-t-lg border-b ${getColumnHeaderClass(
          column.id
        )}`}
      >
        <h3>{column.title}</h3>
        <div className="text-sm">{totalReserves} tareas</div>
      </div>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex-1 p-2 min-h-[200px] ${
              snapshot.isDraggingOver ? "bg-muted/70" : ""
            }`}
          >
            {visibleTasks.length > 0 ?
              visibleTasks.map((reserve, index) => (
                <TooltipProvider key={reserve.id}>
                  <KanbanCard
                    reserve={reserve}
                    index={index}
                    columnId={column.id}
                  />
                </TooltipProvider>
                )) : (
                  <div className="flex justify-center items-center h-20 bg-gray-50 rounded-md border border-dashed border-gray-300">
                    <p className="text-gray-500">No items</p>
                  </div>
                )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="p-2 border-t flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => goToPage(column.currentPage - 1)}
            disabled={column.currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span className="text-xs">
            Página {column.currentPage} de {totalPages}
          </span>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => goToPage(column.currentPage + 1)}
            disabled={column.currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
