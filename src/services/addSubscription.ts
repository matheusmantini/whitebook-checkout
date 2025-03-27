import { SubscriptionDTO } from "@/dto/subscription.dto";
import axiosInstance from "@/lib/axios";

export const addSubscription = async (data: SubscriptionDTO) => {
  try {
    const response = await axiosInstance.post("/subscription", data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
