export interface SubscriptionDTO {
  couponCode: string | null | undefined;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  gateway: string | undefined;
  installments: string | number | undefined;
  offerId: number | undefined;
  userId: number;
}
