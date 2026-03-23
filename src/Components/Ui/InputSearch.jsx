import { IoSearch } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { Field, Form, Formik } from "formik";
import { SearchSchema } from "../../Validation/SearchSchema";

// Formik form to handle search input with validation
export default function InputSearch({ color, icon, width }) {
  return (
    <Formik
      initialValues={{ search: "" }}
      validationSchema={SearchSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form
        autoComplete="off"
        className={`${width} h-9 sm:h-10 md:h-12.5 bg-(--secondary-text-color) rounded-full flex items-center justify-between`}
      >
        <Field
          name="search"
          type="text"
          placeholder="Search"
          className=" outline-0 pl-6 w-full text-sm md:text-base"
        />
        <IoMicOutline className="text-2xl md:text-3xl text-(--main-text-color-light) cursor-pointer" />

        <button
          type="submit"
          className={`bg-${color} text-${icon} rounded-br-full rounded-tr-full border-l border-[#22222233] md:text-xl h-full px-4 flex justify-center items-center cursor-pointer ml-2`}
        >
          <IoSearch />
        </button>
      </Form>
    </Formik>
  );
}
