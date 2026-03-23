import { Form, Formik } from "formik";
import ShippingField from "./ShippingField";
import { ShippingSchema } from "../../../Validation/CheckoutSchema";

export default function ShippingForm() {
  return (
    <div className="bg-white border border-[#22222233] rounded-(--section-radius) p-5 lg:p-10 space-y-5 lg:space-y-10">
      <h4 className="font-(--text-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg ">
        Shipping information
      </h4>
      <Formik initialValues={{ name: "", phone: "", email: "", city: "", state: "", zip: "", address: "" }}
      validationSchema={ShippingSchema}>
        <Form className="space-y-4 md:space-y-6">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <ShippingField name="name" type="text" label="Name" placeholder="John Smith" id="order-name" />
            <ShippingField name="phone" type="text" label="Phone" placeholder="123456789" id="order-phone" />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <ShippingField name="email" type="email" label="Email" placeholder="Johnsmith@gmail.com" id="order-email" />
            <ShippingField name="city" type="text" label="City" placeholder="Maadi" id="order-city" />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <ShippingField name="state" type="text" label="State" placeholder="Cairo" id="order-state" />
            <ShippingField name="zip" type="text" label="Zip" placeholder="11311" id="order-zip" />
          </div>
          <ShippingField name="address" type="text" label="Address" placeholder="Maadi, Cairo, Egypt." id="order-address" />
        </Form>
      </Formik>
    </div>
  )
}
