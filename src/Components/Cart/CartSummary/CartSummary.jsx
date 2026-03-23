import PaymentInfo from "./PaymentInfo/PaymentInfo";
import DiscountCode from './../../Ui/Payment/DiscountCode';

export default function CartSummary() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 bg-[#3B2F4A1A] py-5 md:py-10 px-10 md:px-20">
      <div className="space-y-5 lg:space-y-20">
        <div>
          <h4 className="font-(--header-font-weight) text-(--main-text-color) text-lg md:text-xl md:text-[26px]">
            Payment Summary
          </h4>
          <p className="text-(--main-text-color-light) text-sm md:text-base pt-2 lg:pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <DiscountCode />
      </div>

      <div>
        <PaymentInfo />
      </div>
    </div>
  );
}
