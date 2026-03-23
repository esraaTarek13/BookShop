import BookPrice from "../../Ui/Book/BookPrice";
import BookQuantity from "../../Ui/Book/BookQuantity";
import DeleteFromCart from "../../Ui/Book/DeleteFromCart";
import TotalPrice from "../../Ui/Book/TotalPrice";

export default function CartItemControls({ item }) {
  const totalPrice = item.bookDetails.final_price * item.qty;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-4 lg:gap-8 bg-(--main-color) px-3 py-2 rounded-(--btn-radius)">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-[#22222280] font-(--text-font-weight) uppercase tracking-wide">
            Quantity
          </p>
          <BookQuantity qty={item.qty} cartId={item.bookDetails.bookId} />
        </div>

        <div className="w-px h-8 bg-[#22222215]" />

        <div className="flex flex-col gap-1">
          <p className="text-xs text-[#22222280] font-(--text-font-weight) uppercase tracking-wide">
            Price
          </p>
          <BookPrice price={item.bookDetails.final_price} />
        </div>

        <div className="w-px h-8 bg-[#22222215]" />

        <div className="flex flex-col gap-1">
          <p className="text-xs text-[#22222280] font-(--text-font-weight) uppercase tracking-wide">
            Total
          </p>
          <TotalPrice price={totalPrice} />
        </div>
      </div>

      <DeleteFromCart cartId={item.cartId} />
    </div>
  );
}
