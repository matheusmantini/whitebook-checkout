export enum cardBrands {
  MASTERCARD = "mastercard",
  DINNERSCLUB = "dinnersclub",
  AMERICANEXPRESS = "americanexpress",
  VISA = "visa",
  ELO = "elo",
}

export const cardBrandsChecker = [
  {
    pattern: /^4[0-9]{6,}$/,
    brand: cardBrands.VISA,
  },
  {
    pattern:
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
    brand: cardBrands.MASTERCARD,
  },
  {
    pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    brand: cardBrands.DINNERSCLUB,
  },
  {
    pattern:
      /^((636368|401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636369|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(65090[1-9]|65091\d|650920)|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12})/,
    brand: cardBrands.ELO,
  },
  {
    pattern: /^3[47]\d{13,14}$/,
    brand: cardBrands.AMERICANEXPRESS,
  },
  {
    pattern: /^3[47]d{1,2}(| |-)d{6}\1d{6}$/,
    brand: cardBrands.AMERICANEXPRESS,
  },
];
