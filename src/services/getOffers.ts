import axios from "axios";

export const getOffers = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/offer`,
    );
    return response.data;
  } catch {
    throw new Error("Erro ao carregar as ofertas. Tente novamente mais tarde.");
  }
};
