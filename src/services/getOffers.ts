import axiosInstance from "@/lib/axios";

export const getOffers = async () => {
  try {
    const response = await axiosInstance.get("/offer");
    return response.data;
  } catch {
    throw new Error("Erro ao carregar as ofertas. Tente novamente mais tarde.");
  }
};
