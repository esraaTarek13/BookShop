import { ErrorMessage, Field, Form, Formik } from "formik";
import { TbTicket } from "react-icons/tb";
import { PromoSchema } from "../../../Validation/PromoSchema";

export default function DiscountCode() {
  return (
    <div className="space-y-3 lg:space-y-6">
      <p className="text-(--main-text-color-light) text-base md:text-lg">
        Have a discount code?
      </p>

      <Formik
        initialValues={{ promoCode: "" }}
        validationSchema={PromoSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="flex flex-wrap gap-2 md:gap-4">
          <div className="flex flex-col flex-1 gap-1">
            <div className="flex items-center gap-2 border border-[#22222233] rounded-(--btn-radius) py-2 px-4 md:py-3.75 md:px-5.5 text-(--main-text-color-light)">
              <TbTicket />
              <Field
                type="text"
                name="promoCode"
                placeholder="Enter Promo Code"
                className="outline-none bg-transparent flex-1 text-sm md:text-base"
              />
            </div>
            <ErrorMessage
              name="promoCode"
              component="p"
              className="text-(--btn-color) text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-fit h-fit bg-(--secondary-color) rounded-(--btn-radius) py-2 px-4 md:py-3.75 md:px-5.5 font-(--text-font-weight) text-white text-sm md:text-base cursor-pointer transition-all duration-300 ease-in-out hover:text-(--secondary-color) hover:bg-[#B9A9CF] hover:shadow-[0_0_8px_1px_var(--secondary-color)] active:opacity-75"
          >
            Apply
          </button>
        </Form>
      </Formik>
    </div>
  );
}
