import KanbanBoard from "../../Components/KanbanBoard/Kanban-board";

export default function KanbanBoardPage() {
  return (
    <main className="container mx-auto p-4 md:p-6 mt-24">
      <h1 className="text-2xl mb-6">Tablero Kanban</h1>
      <KanbanBoard />
    </main>
  );
}
