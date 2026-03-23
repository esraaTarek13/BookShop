import axiosInstance from "./AxiosInstance"


export const HomeApi = async () => {
    const res = await axiosInstance.get("/home");
    
    return res.data
}

