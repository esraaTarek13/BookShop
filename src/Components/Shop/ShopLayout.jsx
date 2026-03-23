import { UseBooks } from "../../Hooks/UseBooks";
import InputSearch from "../Ui/InputSearch";
import SortDropdown from "./Sort/SortDropdown";
import Categories from "./Categories/Categories";
import AllBooks from "./Books/AllBooks";
import PaginationBar from "./PaginationBar/PaginationBar";
import Filter from "./Filter/Filter";
import useFilterStore from './../../Stores/useFilterStore';

export default function ShopLayout() {
  const { activeCategories, activeYears, page, setPage, toggleCategory } =
    useFilterStore();

  const { data, isLoading, isError, error } = UseBooks(
    page,
    activeCategories,
    activeYears,
  );
  const allBooks = data?.data?.books || [];
  const categories = data?.data?.categories || [];
  const meta = data?.data?.pagination_links?.meta;

  return (
    <div className="flex gap-4 md:gap-6">
      <aside className="bg-transparent border-r border-[#22222233] pr-2 md:pr-4 md:pl-12 lg:pl-15">
        <Filter categories={categories} years={allBooks} />
      </aside>

      <section className="w-full pt-10 md:pt-15 pr-4 sm:pr-8 lg:pr-12 xl:pr-15">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6.5 lg:items-center">
          <InputSearch
            color={"white"}
            icon={"(--btn-color)"}
            width={"w-full"}
          />
          <SortDropdown />
        </div>

        <Categories
          items={categories}
          activeCategories={activeCategories}
          onCategoryChange={toggleCategory}
        />

        <section className="flex flex-col items-center">
          <AllBooks
            books={allBooks}
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
          <PaginationBar meta={meta} setPage={setPage} />
        </section>
      </section>
    </div>
  );
}
