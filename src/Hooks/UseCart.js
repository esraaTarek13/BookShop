import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddToCart, DeleteFromCart, GetCart, UpdateCartQty } from "../Api/Cart";
import toast from "react-hot-toast";

export const useGetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: GetCart,
    select: (res) => res.data,
  });
};

export const UseAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => AddToCart(id),
    onSuccess: () => {
      toast.success("Added to cart successfully!");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to add to cart");
    },
  });
};

export const UseDeleteFromCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => DeleteFromCart(id),
    onSuccess: () => {
      toast.success("Removed from cart!");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to remove from cart",
      );
    },
  });
};

export const UseUpdateCartQty = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, qty }) => UpdateCartQty(id, qty),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to update quantity",
      );
    },
  });
};


