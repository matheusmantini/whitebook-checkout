import { paymentSchema } from "@/components/paymentForm/paymentValidationSchema";
import { z } from "zod";

export type PaymentFormData = z.infer<typeof paymentSchema>;
