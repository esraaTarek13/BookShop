import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { profileApi, updateProfileApi } from "../Api/ProfileApi";
import toast from "react-hot-toast";
import { useAuthStore } from './../Stores/useAuthStore';

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: profileApi,
    select: (res) => res.data.data,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const updateUser = useAuthStore((state) => state.updateUser);

  return useMutation({
    mutationFn: updateProfileApi,
    onMutate: () => {
      toast.loading("Updating profile...");
    },
    onSuccess: (res) => {
      toast.dismiss();
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      updateUser(res.data.data);
      toast.success("Profile updated successfully!");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error?.response?.data?.message || "Failed to update profile");
    },
  });
};
