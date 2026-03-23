import * as yup from "yup";

export const SearchSchema = yup.object({
    search: yup.string().required("You must enter something to search")
})