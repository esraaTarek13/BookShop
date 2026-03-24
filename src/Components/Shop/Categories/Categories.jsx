import "./Categories.css";

export default function Categories({
  items,
  activeCategories,
  onCategoryChange,
}) {

  return (
    <section className="categories-scroll flex items-center gap-3 overflow-x-auto w-0 min-w-full">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onCategoryChange(item.id)}
          className={`${
            activeCategories.includes(item.id)
              ? "bg-[#D9176C80] text-white"
              : "bg-transparent text-(--main-text-color)"
          } min-w-fit py-2.5 px-6 border border-[#00000033] rounded-(--btn-radius) mt-4 lg:mt-6 text-sm lg:text-base cursor-pointer`}
        >
          {item.categoryName}
        </button>
      ))}
    </section>
  );
}
