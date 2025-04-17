import { z } from "zod";

export const formSchema = z.object({
  capacity: z.string().min(1, {
    message: "Por favor ingrese el número de personas.",
  }),
  date: z.date({
    required_error: "Por favor seleccione una fecha.",
  }),
  hour: z.string({
    required_error: "Por favor seleccione una hora.",
  }),
  floor: z.object(
    {
      id: z.number(),
      name: z.string(),
      image: z.string(),
    },
    {
      required_error: "Por favor seleccione un piso.",
    }
  ),
  services: z.array(z.any()).optional(),
  tables: z.array(z.number()).optional(),
  documentType: z.string({
    required_error: "Por favor seleccione un tipo de documento.",
  }),
  documentNumber: z.string().min(1, {
    message: "Por favor ingrese el número de documento.",
  }),
  phone: z.string().min(1, {
    message: "Por favor ingrese un número de teléfono válido.",
  }),
  guestName: z.string().min(1, {
    message: "Por favor ingrese su nombre completo.",
  }),
  guestEmail: z
    .string()
    .min(1, { message: "Por favor ingrese su correo." })
    .email({ message: "Por favor ingrese un correo electrónico válido." }),
});
