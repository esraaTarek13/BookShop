import * as yup from "yup";

// Register Validation
export const registerSchema = yup.object({
    first_name: yup
        .string()
        .required("*First name is required")
        .matches(/^[A-Za-z\u0600-\u06FF\s]+$/, "*First name must contain only letters"),
    last_name: yup
        .string()
        .required("*Last name is required")
        .matches(/^[A-Za-z\u0600-\u06FF\s]+$/, "*Last name must contain only letters"),
    email: yup
        .string()
        .required("*Email is required")
        .email("*Please enter a valid email"),
    password: yup
        .string()
        .required("*Password is required")
        .min(8, "The password field must be at least 8 characters."),
    password_confirmation: yup
        .string()
        .required("*Password confirmation is required")
        .oneOf([yup.ref('password'), null], "*Passwords do not match"),
    agree: yup
        .boolean()
        .oneOf([true], "*Please accept the terms to continue")
})