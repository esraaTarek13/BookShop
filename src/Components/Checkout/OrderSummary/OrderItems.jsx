import BookImage from "../../Ui/Book/BookImage";
import BookInfo from "../../Ui/Book/BookInfo";
import BookPrice from "../../Ui/Book/BookPrice";
import BookQuantity from "../../Ui/Book/BookQuantity";
import Shipping from "../../Ui/Book/Shipping";

export default function OrderItems() {
  return (
    <div className="flex gap-4 md:gap-6">
      <BookImage width={"w-19 md:w-25"} />
      <div className="space-y-2 flex-1">
        <BookInfo name={"Rich Dad And Poor Dad"} author={"Robert T. Kiyosanki"} />
        <Shipping />
        <div className="flex justify-between items-center">
          <BookPrice price={40} />
          <BookQuantity qty={1} />
        </div>
      </div>
    </div>
  )
}
