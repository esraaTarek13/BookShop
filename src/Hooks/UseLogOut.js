import { useMutation } from "@tanstack/react-query"
import { logOutApi } from "../Api/AuthApi"
import { useAuthStore } from "../Stores/useAuthStore"

// Custom hook to handle logout and clear auth state
export const UseLogOut = () => {
    const logOut = useAuthStore((state) => state.logout)

    return useMutation({
        mutationFn: logOutApi,
        onSuccess: () => {
            logOut()
            localStorage.clear()
        },
    })
}