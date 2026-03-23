import axiosInstance from "./AxiosInstance";

export const CartSummary = async () => {
  const res = await axiosInstance.post("/order");
  return res.data;
};
