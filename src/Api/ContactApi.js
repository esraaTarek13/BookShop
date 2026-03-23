import axiosInstance from "./AxiosInstance"

// Contact API for About page
export const ContactApi = async (values) => {
    const res = await axiosInstance.post("/contacts/store", values);
    return res;
};
