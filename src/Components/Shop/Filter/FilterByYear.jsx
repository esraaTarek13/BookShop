import FilterBox from "./FilterBox";
import useFilterStore from './../../../Stores/useFilterStore';

export default function FilterByYear({ years }) {
  const { activeYears, toggleYear, showAllYears, toggleShowAllYears } = useFilterStore();

  const PageSize = 5;
  const visibleYears = showAllYears ? years : years.slice(0, PageSize);

  return (
    <FilterBox title={"Year"} showAll={showAllYears} onToggle={toggleShowAllYears}>
      {visibleYears.map((year) => (
        <div key={year.bookId} className="flex gap-2 items-center min-w-fit">
          <input
            type="checkbox"
            id={year.bookId}
            checked={activeYears.includes(year.bookId)}
            onChange={() => toggleYear(year.bookId)}
            className="accent-(--btn-color) w-4 h-4 cursor-pointer"
          />
          <label htmlFor={year.bookId}>{year.publicationYear}</label>
        </div>
      ))}
    </FilterBox>
  );
}