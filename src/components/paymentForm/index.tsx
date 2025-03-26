import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../molecules/Input";
import styles from "./paymentForm.module.scss";
import { BUTTON_VARIANTS } from "../atoms/Button/variants";
import Button from "../atoms/Button";
import { paymentSchema } from "./paymentValidationSchema";
import { PaymentFormData } from "@/types/paymentFormData";
import { Select } from "../molecules/Select";
import { useEffect } from "react";
import { cardBrandsChecker } from "../molecules/CardBrands/cardsAvailableBrands";
import { PaymentFormProps } from "@/types/paymentFormProps";

const PaymentsForm: React.FC<PaymentFormProps> = ({ handleSelectedCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    mode: "onChange",
  });

  const cardNumber = watch("cardNumber");

  useEffect(() => {
    if (cardNumber) {
      let cardBrandDetected = "";

      cardBrandsChecker.forEach(({ pattern, brand }) => {
        if (pattern.test(cardNumber.replace(/\s/g, ""))) {
          cardBrandDetected = brand;
        }
      });

      if (cardBrandDetected) {
        handleSelectedCard(cardBrandDetected);
      } else {
        handleSelectedCard("");
      }
    }
  }, [cardNumber, handleSelectedCard]);

  const onSubmit = (data: PaymentFormData) => {
    console.log("Form Data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Wrapper}>
      <Input
        id="cardNumber"
        label="Número do Cartão"
        placeholder="Digite o número do cartão"
        maskKey="cardNumber"
        register={register("cardNumber")}
        error={errors.cardNumber}
      />

      <div className={styles.HalfRow}>
        <Input
          id="cardExpirationDate"
          label="Validade"
          placeholder="MM/AA"
          maskKey="cardExpirationDate"
          register={register("cardExpirationDate")}
          error={errors.cardExpirationDate}
        />
        <Input
          id="cardCVV"
          label="CVV"
          placeholder="000"
          maskKey="cardCVV"
          register={register("cardCVV")}
          error={errors.cardCVV}
        />
      </div>

      <Input
        id="holderName"
        label="Nome impresso no cartão"
        placeholder="Seu nome"
        register={register("holderName")}
        error={errors.holderName}
      />

      <Input
        id="CPF"
        label="CPF"
        placeholder="000.000.000-00"
        maskKey="CPF"
        register={register("CPF")}
        error={errors.CPF}
      />

      <Input
        id="discountCoupon"
        label="Cupom"
        placeholder="Insira aqui"
        register={register("discountCoupon")}
        error={errors.discountCoupon}
      />

      <Select
        id="installments"
        label="Número de parcelas"
        options={[
          { value: "1", label: "1" },
          { value: "3", label: "3" },
          { value: "6", label: "6" },
          { value: "12", label: "12" },
        ]}
        register={register("installments", {
          required: "Número de parcelas é necessário",
        })}
        error={errors.installments}
      />

      <Button type="submit" variant={BUTTON_VARIANTS.Primary} fontSize={14}>
        Finalizar Pagamento
      </Button>
    </form>
  );
};

export default PaymentsForm;
