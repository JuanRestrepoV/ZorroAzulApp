"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarIcon, Coffee, Music, Utensils, Wifi } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { getAditionalServices } from "@/../services/services";
import { toast } from "sonner";
import { useLoader } from "@/context/Loader";
import { useNavigate } from "react-router-dom";
import { getGuestIdentTypes } from "@/../services/guest";
import { formSchema } from "@/schemas/reserveForm.schema";

const horasDisponibles = Array.from({ length: 25 }, (_, i) => {
  const hour = Math.floor(i / 2) + 10;
  const minutes = i % 2 === 0 ? "00" : "30";
  return `${hour}:${minutes}`;
}).filter((hora) => {
  const [h] = hora.split(":");
  return Number.parseInt(h) < 23;
});

export default function ReservationForm({ floors, view, eventSelected }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [additionalServices, setAdditionalServices] = useState([]);
  const [identTypes, setIdentTypes] = useState([]);
  const { showSpinner, hideSpinner } = useLoader();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      capacity: "",
      hour: "",
      floor: {},
      services: [],
      tables: [],
      documentType: "",
      documentNumber: "",
      phone: "",
      guestName: "",
      guestEmail: "",
    },
  });

  function onSubmit(values) {
    setIsSubmitting(true);
    console.log(values);
    values.event = eventSelected;
    localStorage.setItem("selectedFloor", values.floor.id);
    localStorage.setItem("reservationDetails", JSON.stringify(values));
    navigate("/piso");
  }

  useEffect(() => {
    showSpinner();
    Promise.all([getAditionalServices(), getGuestIdentTypes()])
      .then(([services, identTypes]) => {
        setAdditionalServices(services.data);
        setIdentTypes(identTypes.data.results);
        hideSpinner();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error al obtener información");
        hideSpinner();
      });
  }, []);

  return (
    <div className="container mx-auto pt-24 pb-10 px-4 max-w-3xl">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl text-lime-500">
                Formulario de Reserva
              </CardTitle>
              <CardDescription>
                Complete los detalles para realizar su reserva
              </CardDescription>
            </div>
            <button
              onClick={() => view("Home")}
              className="text-sm bg-lime-500 hover:bg-lime-600 text-white px-3 py-1 rounded-md"
            >
              Volver al inicio
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="guestName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lime-500">
                      Nombre completo
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese el nombre completo"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guestEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lime-500">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ingrese el email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lime-500">Teléfono</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Ingrese su número de teléfono"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Ingrese un número de teléfono de contacto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="documentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lime-500">
                        Tipo de documento
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione tipo de documento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {identTypes.map((tipo) => (
                            <SelectItem
                              key={tipo.id}
                              value={tipo.id.toString()}
                            >
                              {tipo.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Seleccione el tipo de documento de identidad.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="documentNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lime-500">
                        Número de documento
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Ingrese su número de documento"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Número de personas */}
              <FormField
                control={form.control}
                name="capacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lime-500">
                      Cantidad de personas
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Ingrese el número de personas"
                        min="1"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Indique cuántas personas asistirán.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Fecha */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-lime-500">Fecha</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: es })
                            ) : (
                              <span>Seleccione una fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="z-50 w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          locale={es}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Seleccione la fecha deseada para su reserva.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lime-500">Hora</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione una hora" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {horasDisponibles.map((hora) => (
                          <SelectItem key={hora} value={hora}>
                            {hora}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Elija la hora para su reserva.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="floor"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-lime-500">Piso</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) =>
                          field.onChange(JSON.parse(value))
                        }
                        value={JSON.stringify(field.value)}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        {floors.map((floor) => (
                          <FormItem key={floor.id} className="space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value={JSON.stringify(floor)}
                                className="sr-only"
                                id={`floor-${floor.id}`}
                              />
                            </FormControl>
                            <FormLabel
                              htmlFor={`floor-${floor.id}`}
                              className={cn(
                                "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                                field.value?.id === floor.id && "border-primary"
                              )}
                            >
                              <div className="mb-3 w-full overflow-hidden rounded-md">
                                <img
                                  src={floor.image}
                                  alt={floor.name}
                                  className="h-[120px] w-full object-cover transition-all hover:scale-105"
                                />
                              </div>
                              <div className="font-medium">{floor.name}</div>
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormDescription>
                      Seleccione el piso donde desea ubicarse.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base text-lime-500">
                        Servicios adicionales
                      </FormLabel>
                      <FormDescription>
                        Seleccione los servicios adicionales que desea incluir.
                      </FormDescription>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {additionalServices.map((servicio) => (
                        <FormField
                          key={servicio.id}
                          control={form.control}
                          name="services"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={servicio.id}
                                className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.some(
                                      (s) => s.id === servicio.id
                                    )}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        field.onChange([
                                          ...(field.value || []),
                                          servicio,
                                        ]);
                                      } else {
                                        field.onChange(
                                          field.value?.filter(
                                            (s) => s.id !== servicio.id
                                          )
                                        );
                                      }
                                    }}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="flex items-center cursor-pointer">
                                    {/* {servicio.icon} */}
                                    {servicio.name}
                                  </FormLabel>
                                </div>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-lime-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Procesando..." : "Realizar Reserva"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
