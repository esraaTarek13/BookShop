import { Field, ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export default function MainField({
  name,
  type,
  id,
  label,
  placeholder,
  isPassword,
  readOnly,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) md:text-lg"
      >
        {label}
      </label>

      <div className="bg-white border border-[#22222233] rounded-(--btn-radius) p-2 md:p-4 flex justify-between items-center">
        <Field
          name={name}
          type={isPassword ? (show ? "text" : "password") : type}
          id={id}
          placeholder={placeholder}
          readOnly={readOnly}
          className="bg-white text-sm md:text-base text-(--main-text-color) w-full border-0 outline-0"
        />
        {isPassword &&
          (show ? (
            <FaEyeSlash
              onClick={() => setShow(!show)}
              className="text-[#878A99] text-lg cursor-pointer"
            />
          ) : (
            <FaEye
              onClick={() => setShow(!show)}
              className="text-[#878A99] text-lg cursor-pointer"
            />
          ))}
      </div>
      <div className="h-3 md:h-5 mb-2">
        <ErrorMessage
          name={name}
          component="p"
          className="text-(--btn-color) text-xs md:text-sm"
        />
      </div>
    </div>
  );
}
