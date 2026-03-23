import { Link } from "react-router-dom";
import Loader from "../../Ui/Loader";
import BookItem from "./BookItem";

export default function AllBooks({ books, isLoading, isError, error }) {
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
    <div className="min-h-screen pb-40 flex justify-center items-center">
      {!isLoading && !isError && (
        <div className="flex flex-col gap-2 mt-10">
          {books?.map((item) => (
            <BookItem item={item} key={item.bookId} />
          ))}
        </div>
      )}
    </div>
  );
}
