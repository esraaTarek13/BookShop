import { useGetWishList } from "../../Hooks/UseWishList";
import Loader from "./../Ui/Loader";
import WishListBtn from "./WishListBtn";
import WishListItem from "./WishListItem";

export default function WishListPage() {
  const { data: wishList, isLoading, isError, error } = useGetWishList();

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

  if (!wishList || wishList.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-(--btn-color) text-lg font-(--text-font-weight) text-center">
          Your wishlist is empty
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-7 md:space-y-10">
      <div className="flex flex-col gap-2">
        {wishList?.map((item) => (
          <WishListItem key={item.book.bookId} item={item.book} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <WishListBtn />
      </div>
    </section>
  );
}
