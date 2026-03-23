import ShopingButtons from "./../../Ui/ShopingButtons";
import BookImage from "./../../Ui/Book/BookImage";
import BookInfo from "../../Ui/Book/BookInfo";
import BookRating from "../../Ui/Book/BookRating";
import BookPrice from "../../Ui/Book/BookPrice";
import { Link } from "react-router-dom";

// Displays a single recommended book with its image and details
export default function RecomendedItem({ book }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-7.5 p-6 bg-white overflow-hidden">
      <Link to={`/single-book/${book.bookId}`}>
        <BookImage alt={book.bookName} width={"w-27 sm:w-44"} />
      </Link>

      <div className="w-full">
        <Link to={`/single-book/${book.bookId}`}>
          <BookInfo
            name={book.bookName}
            author={book.author}
            description={book.description}
          />
        </Link>

        <div className="flex justify-between items-end mb-4 pt-4 lg:pt-6">
          <BookRating rate={book.rate} countReview={book.countReview} />

          <BookPrice price={book.price} />
        </div>

        {/* Shopping buttons */}
        <ShopingButtons id={book.bookId} />
      </div>
    </div>
  );
}
