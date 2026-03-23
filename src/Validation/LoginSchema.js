import * as yup from "yup";

// Login Validation
export const loginSchema = yup.object({
    email: yup
      .string()
      .required("*Email is required")
      .email("*Please enter a valid email"),
    password: yup
      .string()
      .required("*Password is required")
      .min(8, "The password field must be at least 8 characters."),
    checked: yup
      .boolean(),
  })
