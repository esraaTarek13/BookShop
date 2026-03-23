import { Link } from "react-router-dom";
import BookImage from "../../Ui/Book/BookImage";
import BookInfo from "../../Ui/Book/BookInfo";
import BookMeta from "../../Ui/Book/BookMeta";
import BookPrice from "../../Ui/Book/BookPrice";
import BookRating from "../../Ui/Book/BookRating";
import ShopingButtons from "../../Ui/ShopingButtons";

export default function BookItem({ item }) {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:items-start gap-5 lg:gap-10 bg-white rounded-(--section-radius) xl:bg-transparent p-4 md:p-6">
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

        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-2 pt-4 lg:pt-6">
          <BookRating rate={item.rate} countReview={item.countReview} />

          <BookPrice price={item.final_price} />
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mt-2 lg:mt-4">
          <BookMeta author={item.author} year={item.publicationYear} />

          <ShopingButtons id={item.bookId} />
        </div>
      </div>
    </div>
  );
}
