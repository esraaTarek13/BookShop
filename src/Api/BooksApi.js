import axiosInstance from "./AxiosInstance";

export const BooksApi = async (page = 1, categories = [], year = []) => {
  const params = {
    page,
    ...(categories.length > 0 && { categories: categories.join(",") }),
    ...(year.length > 0 && { year: year.join(",") }),
  };

  const res = await axiosInstance.get("/book", { params });
  return res.data;
};

export const SingleBook = async (id) => {
  const res = await axiosInstance.get(`/book/show/${id}`);    
  return res.data;
};
