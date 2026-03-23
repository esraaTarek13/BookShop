import { ErrorMessage, Field } from "formik";

export default function ShippingField({ label, type, placeholder, id, name }) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <label htmlFor={id} className="text-(--main-text-color-light) text-xs md:text-sm cursor-pointer">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="border border-[#22222233] rounded-(--btn-radius) p-2 md:p-4" />
      <ErrorMessage name={name} component="p" className="text-(--btn-color) text-sm" />
    </div>
  )
}
