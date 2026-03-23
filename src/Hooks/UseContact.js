import { useMutation } from "@tanstack/react-query"
import { ContactApi } from "../Api/ContactApi";
import toast from "react-hot-toast";

// Custom hook to send contact messages with success/error toasts
export const UseContact = () => {

    return useMutation({
        mutationFn: ContactApi,

        onMutate: () => {
            toast.loading("Sending message...");
        },

        onSuccess: (res) => {
            toast.dismiss();
            const message = res.data?.message || "Message sent successfully";
            toast.success(message)
        },

        onError: (error) => {
            toast.dismiss();
            const message = error.response?.data?.message || "Failed to send message";
            toast.error(message)
        }
    })
}
