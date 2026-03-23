import axiosInstance from "./AxiosInstance";

export const AddToWishList = async (id) => {
  const res = await axiosInstance.post(`/wishlist/store/${id}`);
  return res.data;
};

export const GetWishList = async () => {
  const res = await axiosInstance.get("/wishlist");
  return res.data;
};

export const DeleteFromWishList = async (id) => {
  const res = await axiosInstance.delete(`/wishlist/destroy/${id}`);
  return res.data;
};

export const MoveAllToCart = async () => {
  const res = await axiosInstance.post("/wishlist/move-to-cart");
  return res.data;
};
