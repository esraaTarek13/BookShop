import * as Yup from "yup";

export const NoteSchema = Yup.object({
    note: Yup.string().max(300, "Max 300 characters"),
});


export const ShippingSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name is too long")
    .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters")
    .required("Name is required"),

  phone: Yup.string()
    .matches(/^01[0-2,5]{1}[0-9]{8}$/, "Enter a valid Egyptian phone number")
    .required("Phone is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  city: Yup.string()
    .min(3, "City is too short")
    .required("City is required"),

  state: Yup.string()
    .min(3, "State is too short")
    .required("State is required"),

  zip: Yup.string()
    .matches(/^\d{5}$/, "ZIP must be 5 digits")
    .required("ZIP is required"),

  address: Yup.string()
    .min(10, "Address must be at least 10 characters")
    .required("Address is required"),
});