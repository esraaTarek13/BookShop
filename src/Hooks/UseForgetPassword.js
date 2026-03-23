import { useMutation } from "@tanstack/react-query";
import { ForgetPasswordApi } from "../Api/AuthApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const UseForgetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ForgetPasswordApi,
    onMutate: () => {
      toast.loading("Sending OTP to your email...");
    },
    onSuccess: (res, variables) => {
      toast.dismiss();
      toast.success(res?.data?.message || "OTP sent successfully!");
      localStorage.setItem("email", variables.email);
      navigate("/add-code");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(
        error.response?.data?.errors?.email || "The selected email is invalid.",
      );
    },
  });
};
