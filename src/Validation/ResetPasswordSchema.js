import * as yup from "yup";

// ResetPassword Validation
export const ResetPasswordSchema = yup.object({
    password: yup
        .string()
        .required("*Password is required")
        .min(8, "The password field must be at least 8 characters."),
    password_confirmation: yup
        .string()
        .required("*Password confirmation is required")
        .oneOf([yup.ref('password'), null], "*Passwords do not match"),
})