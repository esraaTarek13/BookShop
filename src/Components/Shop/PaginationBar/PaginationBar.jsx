export default function PaginationBar({ meta, setPage }) {
  const total = meta?.total || 0;
  const from = meta?.from || 0;
  const to = meta?.to || 0;
  const lastPage = meta?.last_page || 1;
  const currentPage = meta?.current_page || 1;
  const pages = Array.from({ length: lastPage }, (_, i) => i + 1);

  return (
    <div>
      <div className="flex items-center gap-2 md:gap-4 font-(--text-font-weight) text-(--btn-color) mb-2.5">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? "opacity-50" : "cursor-pointer"} text-[12px] md:text-sm lg:text-base`}
        >
          &lt; Previous
        </button>

        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`${
              currentPage === p ? "bg-(--btn-color) text-white" : "bg-white"
            } rounded-(--btn-radius) py-[4.5px] px-[8.5px] lg:py-[7.5px] lg:px-[14.5px] text-sm lg:text-lg cursor-pointer`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, lastPage))}
          disabled={currentPage === lastPage}
          className={`${currentPage === lastPage ? "opacity-50" : "cursor-pointer"} text-[12px] md:text-sm lg:text-base`}
        >
          Next &gt;
        </button>
      </div>

      <p className="text-center text-(--main-text-color-light) text-[12px] md:text-sm lg:text-base mb-12 md:mb-24.25">
        {from}-{to} of {total}+ Book available
      </p>
    </div>
  );
}
