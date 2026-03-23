import { useQuery } from "@tanstack/react-query";
import { BooksApi, SingleBook } from "../Api/BooksApi";

export const UseBooks = (page = 1, categories = [], year = []) => {
  return useQuery({
    queryKey: ["book", page, categories, year],
    queryFn: () => BooksApi(page, categories, year),
    placeholderData: (prev) => prev,
  });
};


export const UseSingleBook = (id) => {
  return useQuery({
    queryKey: ["book", id],
    queryFn: () => SingleBook(id),
    enabled: !!id, 
  });
};