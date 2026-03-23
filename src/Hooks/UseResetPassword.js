import { useMutation } from "@tanstack/react-query";
import { ResetPassword } from "../Api/AuthApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UseResetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ResetPassword,
    onMutate: () => {
      toast.loading("Resetting password...");
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success("Password reset successfully!");
      navigate("/login")
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error?.response?.data?.message || "Failed to reset password");
    },
  });
};
