import { useMutation } from "@tanstack/react-query"
import { RegisterApi } from "../Api/AuthApi"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

// Custom hook to handle user registration and navigate on success
export const UseRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: RegisterApi,

    onMutate: () => {
      toast.loading("Registering user...");
    },

    onSuccess: () => {
      toast.dismiss();
      navigate("/login", { replace: true })
    },

    onError: (error) => {
      toast.dismiss();

      let errorMessage = "Registration failed";

      if (error.response?.data?.message?.includes("Duplicate entry")) {
        errorMessage = "This email is already registered.";
      }

      toast.error(errorMessage);
    }

  })
}
