import { z } from "zod";

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .length(19, { message: "Número do cartão inválido." })
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, {
      message: "Formato do número do cartão inválido.",
    }),
  cardExpirationDate: z
    .string()
    .length(5, { message: "Data de expiração inválida." })
    .regex(/^\d{2}\/\d{2}$/, {
      message: "Formato da data de expiração inválido.",
    }),
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
    .min(1, { message: "Selecione o número de parcelas" }),
});
