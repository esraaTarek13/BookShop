import { useGetCart } from "../../Hooks/UseCart";
import Loader from "../Ui/Loader";
import CartSection from "./CartItems/CartSection";
import CartSummary from "./CartSummary/CartSummary";

export default function CartPage() {
  const { data, isLoading, isError, error } = useGetCart();

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-(--btn-color) text-lg font-(--text-font-weight) text-center">
          {error?.message || "Something went wrong"}
        </p>
      </div>
    );
  }

  if (!data?.cart || data.cart.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-(--btn-color) text-lg font-(--text-font-weight) text-center">
          Your Cart is empty
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10 md:space-y-15">
      <div className="flex flex-col gap-2">
        {data.cart.map((item) => (
          <CartSection key={item.bookDetails.bookId} item={item} />
        ))}
      </div>
      <div className="pb-20">
        <CartSummary />
      </div>
    </div>
  );
}
