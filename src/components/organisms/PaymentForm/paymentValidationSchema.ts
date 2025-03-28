import { z } from "zod";

export const paymentSchema = z.object({
  cardNumber: z.string().min(17, { message: "Número do cartão inválido." }),
  cardExpirationDate: z
    .string()
    .length(5, { message: "Data de expiração inválida." })
    .regex(/^\d{2}\/\d{2}$/, {
      message: "Formato da data de expiração inválido.",
    })
    .refine(
      (date) => {
        const [month, year] = date.split("/").map(Number);
        if (month < 1 || month > 12) return false;

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;

        if (
          year < currentYear ||
          (year === currentYear && month < currentMonth)
        ) {
          return false;
        }

        return true;
      },
      { message: "O cartão expirou ou a data é inválida." },
    ),
  cardCVV: z
    .string()
    .length(3, { message: "CVV inválido." })
    .regex(/^\d{3}$/, { message: "CVV deve conter 3 dígitos." }),
  CPF: z
    .string()
    .length(14, { message: "CPF inválido." })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
      message: "Formato de CPF inválido.",
    }),
  holderName: z
    .string()
    .min(3, { message: "Nome impresso no cartão é obrigatório." })
    .max(50, { message: "O máximo de caracteres permitidos é 50." }),
  discountCoupon: z.string().optional(),
  installments: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value === undefined || value === "") return true;
        return /^\d+$/.test(value);
      },
      { message: "Selecione o número de parcelas" },
    ),
});
