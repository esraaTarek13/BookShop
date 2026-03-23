import axiosInstance from "./AxiosInstance";

export const profileApi = async () => {
  const res = await axiosInstance.get("/profile");
  return res;
};

export const updateProfileApi = async (values) => {
  const res = await axiosInstance.post("/profile/update", values);
  return res;
};
