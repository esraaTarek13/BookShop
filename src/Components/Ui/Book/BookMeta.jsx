export default function BookMeta({ author, year, book, pages, language }) {
  return (
    <div className="flex items-center flex-wrap gap-4 lg:gap-6 ">
      <div>
        <p className="text-[12px] md:text-sm text-(--main-text-color-light)">
          {" "}
          Author
        </p>
        <span className="text-[12px] md:text-sm font-(--text-font-weight) text-(--main-text-color)">
          {author}
        </span>
      </div>

      <div>
        <p className="text-[12px] md:text-sm text-(--main-text-color-light)">
          Year
        </p>
        <span className="text-[12px] md:text-sm font-(--text-font-weight) text-(--main-text-color)">
          {year}
        </span>
      </div>

      {book && (
        <div>
          <p className="text-[12px] md:text-sm text-(--main-text-color-light)">
            Book
          </p>
          <span className="text-[12px] md:text-sm font-(--text-font-weight) text-(--main-text-color)">
            {book}
          </span>
        </div>
      )}

      {pages && (
        <div>
          <p className="text-[12px] md:text-sm text-(--main-text-color-light)">
            Pages
          </p>
          <span className="text-[12px] md:text-sm font-(--text-font-weight) text-(--main-text-color)">
            {pages}
          </span>
        </div>
      )} 

      {language && (
        <div>
          <p className="text-[12px] md:text-sm text-(--main-text-color-light)">
            Language
          </p>
          <span className="text-[12px] md:text-sm font-(--text-font-weight) text-(--main-text-color)">
            {language}
          </span>
        </div>
      )}
    </div>
  );
}
