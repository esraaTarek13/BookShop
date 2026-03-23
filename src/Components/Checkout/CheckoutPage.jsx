import Note from "./Note";
import OrderSummary from "./OrderSummary/OrderSummary";
import PaymentMethod from "./PaymentMethod";
import ShippingForm from "./ShippingInfo/ShippingForm";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col xl:flex-row gap-4 md:gap-6">
      <div className="flex-1 space-y-4 md:space-y-6">
        <ShippingForm />
        <PaymentMethod />
        <Note />
      </div>
      <div><OrderSummary /></div>
    </div>
  )
}
