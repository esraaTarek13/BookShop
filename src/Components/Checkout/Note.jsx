import { ErrorMessage, Field, Form, Formik } from "formik";
import { GoPencil } from 'react-icons/go';
import { NoteSchema } from "../../Validation/CheckoutSchema";

export default function Note() {
    return (
        <div className="bg-white border border-[#22222233] rounded-(--section-radius) p-5 lg:p-10 space-y-5 lg:space-y-10">
            <h4 className="font-(--text-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg ">
                Note
            </h4>
            <Formik initialValues={{ note: "" }} validationSchema={NoteSchema} onSubmit={(values) => console.log(values)}>
                <Form>
                    <div className="flex items-start gap-2 border border-[#22222233] rounded-(--btn-radius) p-2 md:p-4 text-(--main-text-color-light)">
                        <GoPencil />
                        <Field as="textarea" rows={5} placeholder="Add note" name="note" className="outline-none bg-transparent flex-1 text-sm md:text-base" />
                    </div>
                    <ErrorMessage name="note" component="p" className="text-(--btn-color) text-sm" />
                </Form>
            </Formik>
        </div>
    )
}
