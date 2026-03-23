import axiosInstance from "./AxiosInstance";

export const RegisterApi = async (values) => {
    const res = await axiosInstance.post("/register", values);
    return res;
};

export const LoginApi = async (values) => {
    const res = await axiosInstance.post("/login", values);
    return res;
};

export const ForgetPasswordApi = async (values) => {
    const res = await axiosInstance.post("/forget-password", values);
    return res;
};
export const ResetPassword = async (values) => {
    const res = await axiosInstance.post("/reset-password", values);
    return res;
};

export const logOutApi = async () => {
    const res = await axiosInstance.post("/logout");
    return res;
};