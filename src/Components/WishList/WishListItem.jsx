import BookImage from "./../Ui/Book/BookImage";
import BookInfo from "./../Ui/Book/BookInfo";
import BookRating from "./../Ui/Book/BookRating";
import BookPrice from "./../Ui/Book/BookPrice";
import BookMeta from "./../Ui/Book/BookMeta";
import { Link } from "react-router-dom";
import ShoppingButtons from "../Ui/ShopingButtons";

export default function WishListItem({ item }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-10 bg-white rounded-(--section-radius) p-4 md:p-6">
      <Link to={`/single-book/${item.bookId}`}>
        <BookImage alt={item.bookName} width={"w-27 sm:w-44"} />
      </Link>

      <div className="w-full">
        <Link to={`/single-book/${item.bookId}`}>
          <BookInfo
            name={item.bookName}
            description={item.description}
            discount={item.discount}
            code={item.asinCode}
          />
        </Link>

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-2 pt-4 lg:pt-6">
          <BookRating rate={item.rate} countReview={item.countReview} />

          <BookPrice price={item.price} />
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-2 lg:mt-4">
          <BookMeta author={item.author} year={item.publicationYear} />

          <ShoppingButtons id={item.bookId} />
        </div>
      </div>
    </div>
  );
}
