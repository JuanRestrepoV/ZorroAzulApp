import {
  Calendar,
  Clock,
  Coffee,
  MapPin,
  Music,
  Users,
  Utensils,
  Wifi,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ReservationDetails() {
  const reservation = {
    id: "RES-12345",
    date: "2025-04-10",
    time: "19:30",
    people: 4,
    floor: 2,
    table: "Mesa 8",
    status: "confirmed",
    additionalServices: [
      { id: 1, name: "WiFi Premium", icon: <Wifi className="h-4 w-4" /> },
      { id: 2, name: "Menú Especial", icon: <Utensils className="h-4 w-4" /> },
      { id: 3, name: "Música en vivo", icon: <Music className="h-4 w-4" /> },
    ],
  };

  // Format date to display in a more readable format
  const formattedDate = new Date(reservation.date).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto py-6 px-4 max-w-3xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight">
            Detalles de la Reserva
          </h1>
          <p className="text-muted-foreground">
            Información completa de su reserva #{reservation.id}
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Información Principal</CardTitle>
              <Badge
                variant={
                  reservation.status === "confirmed" ? "default" : "outline"
                }
              >
                {reservation.status === "confirmed"
                  ? "Confirmada"
                  : "Pendiente"}
              </Badge>
            </div>
            <CardDescription>Detalles básicos de su reserva</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <Calendar className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Fecha</p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {formattedDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <Clock className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Hora</p>
                  <p className="text-sm text-muted-foreground">
                    {reservation.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <Users className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Personas</p>
                  <p className="text-sm text-muted-foreground">
                    {reservation.people} personas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">Ubicación</p>
                  <p className="text-sm text-muted-foreground">
                    Piso {reservation.floor}, {reservation.table}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Servicios Adicionales</CardTitle>
            <CardDescription>
              Servicios especiales incluidos en su reserva
            </CardDescription>
          </CardHeader>
          <CardContent>
            {reservation.additionalServices.length > 0 ? (
              <div className="grid gap-4">
                {reservation.additionalServices.map((service, index) => (
                  <div key={service.id}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                        {service.icon}
                      </div>
                      <div className="font-medium">{service.name}</div>
                    </div>
                    {index < reservation.additionalServices.length - 1 && (
                      <Separator className="my-3" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-3 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                  <Coffee className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground">
                  No hay servicios adicionales
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-sm text-muted-foreground">
          Para modificar o cancelar su reserva, por favor contacte con nosotros
          con al menos 24 horas de antelación.
        </div>
      </div>
    </div>
  );
}
