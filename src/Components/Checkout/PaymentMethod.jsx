import { Field, Form, Formik } from "formik";

const options = [
  { label: "Online payment", value: "online" },
  { label: "Cash on delivery", value: "cash" },
  { label: "POS on delivery", value: "pos" },
];

export default function PaymentMethod() {
  return (
    <div className="bg-white border border-[#22222233] rounded-(--section-radius) p-5 lg:p-10 space-y-5 lg:space-y-10">
      <h4 className="font-(--text-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg ">
        Payment Method
      </h4>
      <Formik initialValues={{ payment: "cash" }}>
        <Form>
          <div className="flex items-center flex-col sm:flex-row gap-4 md:gap-6.25">
            {options.map((option) => (
              <label
                key={option.value}
                className="w-full flex items-center justify-center gap-2 border border-[#22222233] rounded-(--btn-radius) py-3 md:py-4 cursor-pointer has-[:checked]:bg-(--btn-color-light) has-[:checked]:border-(--btn-color) has-[:checked]:text-(--btn-color) transition-all text-sm md:text-base"
              >
                <Field type="radio" name="payment" value={option.value} className="accent-(--btn-color)" />
                {option.label}
              </label>
            ))}
          </div>
        </Form>
      </Formik>
    </div>
  )
}
