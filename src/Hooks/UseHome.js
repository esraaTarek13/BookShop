import { useQuery } from "@tanstack/react-query"
import { HomeApi } from "../Api/HomeApi"

export const UseHome = () => {
    return useQuery({
        queryKey: ["home"],
        queryFn: HomeApi,
    })
}