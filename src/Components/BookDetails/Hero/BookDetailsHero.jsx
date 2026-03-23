import BookDetailsBadges from "../../Ui/Book/BookDetailsBadges";
import BookIcons from "../../Ui/Book/BookIcons";
import BookImage from "../../Ui/Book/BookImage";
import BookMeta from "../../Ui/Book/BookMeta";
import BookPrice from "../../Ui/Book/BookPrice";
import BookQuantity from "../../Ui/Book/BookQuantity";
import BookRating from "../../Ui/Book/BookRating";
import ShopingButtons from "../../Ui/ShopingButtons";
import BookInfo from "./../../Ui/Book/BookInfo";

export default function BookDetailsHero({ book }) {
  const bookImages = [
    "/images/book1.png",
    "/images/back-cover.jpg",
    "/images/front-cover.png",
  ];
  return (
    <section className="flex flex-col lg:flex-row gap-5 lg:gap-10 bg-white rounded-(--btn-radius) lg:bg-transparent p-4">
      <BookImage
        alt={book?.bookName}
        width={"w-40 md:w-65 lg:w-60"}
        images={bookImages}
      />

      <div className="space-y-4 md:space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-4 md:space-y-6">
            <BookInfo name={book?.bookName} description={book?.description} />
            <BookMeta
              author={book.author}
              year={book.publicationYear}
              book={"1 Of 1"}
              pages={book.numberOfPages}
              language={book.lang}
            />
          </div>
          <BookIcons />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-y-4 md:gap-y-0">
          <BookRating rate={book.rate} countReview={book.countReview} />

          <BookDetailsBadges stock={book.stock} discount={book.asinCode} />
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-4 md:gap-y-0">
          <BookPrice price={book.final_price} />

          <ShopingButtons id={book.bookId} />
        </div>
      </div>
    </section>
  );
}
