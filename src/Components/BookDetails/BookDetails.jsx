import { useParams } from "react-router-dom";
import BookDetailsHero from "./Hero/BookDetailsHero";
import Loader from "./../Ui/Loader";
import { UseSingleBook } from "../../Hooks/UseBooks";
import BookDetailsTabs from "./Tabs/BookDetailsTabs";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = UseSingleBook(id);
  const book = data?.data?.book;

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

  return (
    <div className="min-h-screen pt-10 md:pt-15">
      {book && (
        <>
          <BookDetailsHero book={book} />
          <BookDetailsTabs book={book} />
        </>
      )}
    </div>
  );
}
