import axiosInstance from "./AxiosInstance";

export const AddToCart = async (id) => {
  const res = await axiosInstance.post(`/cart/store/${id}`, { qty: 1 });
  return res.data;
};

export const GetCart = async () => {
  const res = await axiosInstance.get("/cart");
  return res.data;
};

export const DeleteFromCart = async (id) => {
  const res = await axiosInstance.delete(`/cart/destroy/${id}`);
  return res.data;
};

export const UpdateCartQty = async (id, qty) => {
  const res = await axiosInstance.post(`/cart/update/${id}`, { qty });
  return res.data
};




