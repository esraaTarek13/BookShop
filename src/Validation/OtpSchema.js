import * as yup from "yup";

// OTP Validation
export const OtpSchema = yup.object({
  otp: yup
    .string()
    .required("OTP is required")
    .length(4, "OTP must be 6 digits"),
});