import FilterBox from "./FilterBox";
import useFilterStore from './../../../Stores/useFilterStore';

export default function FilterByCategories({ categories }) {
  const {
    activeCategories,
    toggleCategory,
    showAllCategories,
    toggleShowAllCategories,
  } = useFilterStore();

  const PageSize = 5;
  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, PageSize);

  return (
    <FilterBox
      title={"Categories"}
      showAll={showAllCategories}
      onToggle={toggleShowAllCategories}
    >
      {visibleCategories.map((cat) => (
        <div key={cat.id} className="flex gap-2 items-center min-w-fit">
          <input
            type="checkbox"
            id={cat.id}
            checked={activeCategories.includes(cat.id)}
            onChange={() => toggleCategory(cat.id)}
            className="accent-(--btn-color) w-4 h-4 cursor-pointer"
          />
          <label htmlFor={cat.id} className="cursor-pointer">
            {cat.categoryName}
          </label>
        </div>
      ))}
    </FilterBox>
  );
}
