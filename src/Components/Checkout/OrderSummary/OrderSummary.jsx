import OrderItems from "./OrderItems";
import OrderTotal from "./OrderTotal";

export default function OrderSummary() {
  return (
    <div className="h-full flex flex-col bg-white border border-[#22222233] rounded-(--section-radius) p-5 lg:p-10 space-y-5 lg:space-y-10">
      <h4 className="font-(--text-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg ">
        Order summary
      </h4>
      <div className="flex flex-col justify-between gap-10 flex-1">
        <div className="space-y-6">
          <OrderItems />
          <OrderItems />
        </div>
        <OrderTotal />
      </div>
    </div>
  );
}
