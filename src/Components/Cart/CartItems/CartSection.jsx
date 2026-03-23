import { Link } from "react-router-dom";
import BookImage from "../../Ui/Book/BookImage.jsx";
import BookInfo from "../../Ui/Book/BookInfo.jsx";
import Shipping from "../../Ui/Book/Shipping.jsx";
import CartItemControls from "./CartItemControls.jsx";

export default function CartSection({ item }) {
  return (
    <section className="bg-white p-4 md:p-6 rounded-(--section-radius) shadow-sm border border-[#22222210]">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
        <Link
          to={`/single-book/${item.bookDetails.bookId}`}
          className="shrink-0"
        >
          <BookImage alt={item.bookDetails.bookName} width={"w-27 sm:w-44"} />
        </Link>

        <div className="w-full space-y-4">
          <div>
            <Link to={`/single-book/${item.bookDetails.bookId}`}>
              <BookInfo
                name={item.bookDetails.bookName}
                author={item.bookDetails.author}
                description={item.bookDetails.description}
              />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Shipping />
            <span className="w-1 h-1 rounded-full bg-[#22222240]" />
            <p className="text-[12px] sm:text-sm text-[#22222280] font-(--header-font-weight)">
              ASIN :
              <span className="font-normal">{item.bookDetails.asinCode}</span>
            </p>
          </div>

          <div className="w-full h-px bg-[#22222210]" />

          <CartItemControls item={item} />
        </div>
      </div>
    </section>
  );
}
