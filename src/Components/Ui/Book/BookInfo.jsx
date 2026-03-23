
export default function BookInfo({ name, author, description, discount, code }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 items-start">
      <div>
        <h4 className="font-(--header-font-weight) text-base md:text-lg text-(--main-text-color)">
          {name}
        </h4>

        <p className="pt-1 text-xs md:text-sm text-(--main-text-color-light)">
          {author && "Author:"}
          <span className="text-(--main-text-color)">{author}</span>
        </p>

        <p className="pt-2 text-[12px] md:text-sm text-(--main-text-color-light) line-clamp-3">
          {description}
        </p>
      </div>

      {Number(discount) > 0 && (
        <div className="min-w-fit w-fit bg-white border border-(--second-text-yellow-color) rounded-(--btn-radius)">
          <p className="text-[12px] md:text-sm text-(--second-text-yellow-color) p-2">{discount}% Discount code: {code}</p>
        </div>
      )}
    </div>
  );
}
