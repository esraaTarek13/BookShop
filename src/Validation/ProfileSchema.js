import * as yup from "yup";

// Profile Schema
export const ProfileSchema = yup.object({
    first_name: yup
        .string()
        .matches(/^[A-Za-z\u0600-\u06FF\s]+$/, "*First name must contain only letters"),

    last_name: yup
        .string()
        .matches(/^[A-Za-z\u0600-\u06FF\s]+$/, "*Last name must contain only letters"),

    email: yup
        .string()
        .email("*Please enter a valid email"),

    address: yup
        .string()
        .nullable()
        .test(
            "valid-address",
            "*Address must contain only letters and numbers, and be long enough",
            (value) => {
                if (!value) return true;
                return (
                    /^[a-zA-Z0-9\u0600-\u06FF\s]+$/.test(value) &&
                    value.trim().split(/\s+/).length >= 3
                );
            }
        ),

    phone: yup
        .string()
        .nullable()
        .test(
            "valid-phone",
            "*Phone number is invalid",
            (value) => {
                if (!value) return true;
                return /^[0-9]+$/.test(value) && value.length >= 10 && value.length <= 15;
            }
        ),
});
