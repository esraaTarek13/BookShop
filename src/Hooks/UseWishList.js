import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AddToWishList,
  DeleteFromWishList,
  GetWishList,
  MoveAllToCart,
} from "../Api/WishListAPI";
import toast from "react-hot-toast";

export const useGetWishList = () => {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: GetWishList,
    select: (res) => res.data,
  });
};

export const UseAddToWishList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => AddToWishList(id),
    onSuccess: () => {
      toast.success("Added to wishlist successfully!");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to add to wishlist",
      );
    },
  });
};

export const UseDeleteFromWishList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => DeleteFromWishList(id),
    onSuccess: () => {
      toast.success("Removed from wishlist!");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to remove from wishlist",
      );
    },
  });
};

export const UseMoveAllToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: MoveAllToCart,
    onSuccess: () => {
      toast.success("Moved all to cart!");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to move to cart");
    },
  });
};
