export default function ProductDetails({ book }) {
  return (
    <div className="space-y-2 md:space-y-4">
      <p className="font-(--header-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg lg:text-[20px]">
        Book Title : <span className="font-normal">{book?.bookName}</span>
      </p>
      <p className="font-(--header-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg lg:text-[20px]">
        Author : <span className="font-normal">{book?.author}</span>
      </p>
      <p className="font-(--header-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg lg:text-[20px]">
        Publication Date : <span className="font-normal">{book?.publicationYear}</span>
      </p>
      <p className="font-(--header-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg lg:text-[20px]">
        ASIN : <span className="font-normal">{book?.asinCode}</span>
      </p>
      <p className="font-(--header-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg lg:text-[20px]">
        Language : <span className="font-normal">{book?.lang}</span>
      </p>
      <p className="font-(--header-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg lg:text-[20px]">
        Publisher : <span className="font-normal">Printer</span>
      </p>
      <p className="font-(--header-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg lg:text-[20px]">
        Pages : <span className="font-normal">{book?.numberOfPages}</span>
      </p>
      <p className="font-(--header-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg lg:text-[20px]">
        Book Format : <span className="font-normal">{book?.bookFormat}</span>
      </p>
      <p className="font-(--header-font-weight) text-(--main-text-color) text-sm sm:text-base md:text-lg lg:text-[20px]">
        Best Seller Rank : <span className="font-normal">#3</span>
      </p>
    </div>
  );
}
