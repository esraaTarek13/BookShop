import PaymentBtns from "./PaymentBtns";
import PaymentRow from './../../../Ui/Payment/PaymentRow';

export default function PaymentInfo() {
  return (
    <div className="space-y-6.5">
      <PaymentRow label="Subtotal" value="$120" />
      <PaymentRow label="Shipping" value="Free Delivery" />
      <PaymentRow label="Tax" value="$4" />
      <div className="border-t border-[#22222233] pt-6.5">
        <PaymentRow label="Total" value="$124" isTotal />
      </div>
      <PaymentBtns />
    </div>
  )
}
