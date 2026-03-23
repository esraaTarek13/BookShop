import { Form, Formik } from "formik";
import { ContactSchema } from "../../../Validation/ContactSchema";
import { UseContact } from "../../../Hooks/UseContact";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsBook } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import ContactField from "./ContactField";
import { useAuthStore } from "../../../Stores/useAuthStore";

export default function ContactForm() {
  const { mutate } = UseContact();
  const user = useAuthStore((state) => state.user);

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={ContactSchema(user)}
      onSubmit={(values) => mutate(values)}
    >
      <Form className="contact-form flex flex-col items-center w-full">
        <div className="w-full md:flex gap-4">
          <div className="md:w-[50%]">
            <ContactField
              name={"name"}
              placeholder={"Name"}
              icon={<BiUser />}
            />
          </div>
          <div className="md:w-[50%] mt-6 md:mt-0">
            <ContactField
              name={"email"}
              placeholder={"Email Address"}
              icon={<FaRegEnvelope />}
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <ContactField
            name="subject"
            placeholder="Subject"
            icon={<BsBook />}
          />
        </div>

        <div className="mt-6 w-full">
          <ContactField
            name="message"
            placeholder="Your Message"
            icon={<GoPencil />}
            isTextarea
          />
        </div>

        <button
          type="submit"
          className="text-(--secondary-text-color) mt-10 py-3 px-9.5 rounded-(--btn-radius) outline-0 text-base lg:text-lg bg-(--btn-color) border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) hover:shadow-[0_0_12px_2px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75 cursor-pointer"
        >
          Send Message
        </button>
      </Form>
    </Formik>
  );
}
