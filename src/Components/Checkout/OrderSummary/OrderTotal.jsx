import useModalStore from "../../../Stores/useModalStore";
import DiscountCode from "../../Ui/Payment/DiscountCode";
import PaymentRow from "./../../Ui/Payment/PaymentRow";
import OrderSuccessModal from "./OrderSuccessModal";

export default function OrderTotal() {
  const isOpen = useModalStore((state) => state.isOrderSuccessModalOpen);
  const openModal = useModalStore((state) => state.openOrderSuccessModal);
  const closeModal = useModalStore((state) => state.closeOrderSuccessModal);
  
  return (
    <div className="space-y-5 md:space-y-10">
      <DiscountCode />
      <div className="space-y-2 md:space-y-3">
        <div className="border-t border-b border-[#22222233] pt-2 md:pt-4 pb-2 md:pb-4">
          <PaymentRow label="Subtotal" value="$120" />
          <PaymentRow label="Tax" value="$4" />
          <PaymentRow label="Shipping" value="$0" />
        </div>
        <PaymentRow label="Total (USD)" value="$124" isTotal />
      </div>
      <button
        onClick={openModal}
        className="w-full bg-(--btn-color) border border-(--btn-color) rounded-(--btn-radius) py-2 md:py-3.25 font-(--text-font-weight) text-white text-sm md:text-base cursor-pointer hover:bg-transparent hover:text-(--btn-color) hover:shadow-[0_0_8px_1px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75"
      >
        Confirm order
      </button>
      <OrderSuccessModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
