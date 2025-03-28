import { paymentSchema } from "@/components/organisms/PaymentForm/paymentValidationSchema";
import { z } from "zod";

export type PaymentFormData = z.infer<typeof paymentSchema>;
