import { useMutation } from "@tanstack/react-query";
import { LoginApi } from "../Api/AuthApi";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Stores/useAuthStore";
import { toast } from "react-hot-toast";

export const UseLogin = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: LoginApi,
    onMutate: () => {
      toast.loading("Logging in...");
    },
    onSuccess: (res, values) => {
      toast.dismiss();
      const { token, user } = res.data.data;
      login(token, user, values?.checked);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.response?.data?.message || "Login failed");
    },
  });
};
