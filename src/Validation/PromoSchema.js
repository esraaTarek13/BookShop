import * as Yup from "yup";

export const PromoSchema = Yup.object({
  promoCode: Yup.string()
    .trim()
    .min(3, "Code is too short")
    .max(20, "Code is too long")
    .matches(/^[A-Za-z0-9]+$/, "Invalid code ")
});
