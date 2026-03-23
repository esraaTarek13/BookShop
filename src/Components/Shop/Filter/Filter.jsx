import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import FilterByCategories from "./FilterByCategories";
import FilterByYear from "./FilterByYear";
import FilterModal from "./FilterModal";
import useModalStore from "../../../Stores/useModalStore";

export default function Filter({ categories, years }) {
  const isOpen = useModalStore((state) => state.isFilterModalOpen);
  const openFilterModal = useModalStore((state) => state.openFilterModal);
  const closeFilterModal = useModalStore((state) => state.closeFilterModal);

  const handleOpen = () => {
    if (window.innerWidth < 768) openFilterModal();
  };

  return (
    <div className="h-full">
      <div className="flex items-center gap-2 text-(--main-text-color) pl-2 pt-10 md:pt-15">
        <button
          onClick={handleOpen}
          className="cursor-pointer md:cursor-default flex items-center justify-center w-9 h-9 md:w-auto md:h-auto rounded-(--btn-radius) md:rounded-none bg-[#D9176C1A] md:bg-transparent text-(--btn-color) md:text-(--main-text-color) transition-all duration-200 hover:bg-(--btn-color) hover:text-white md:hover:bg-transparent md:hover:text-(--main-text-color)"
        >
          <HiOutlineAdjustmentsHorizontal className="text-2xl" />
        </button>
        <p className="hidden md:block font-(--text-font-weight) text-lg lg:text-2xl">
          Filter
        </p>
      </div>

      <div className="hidden md:block mt-4 space-y-6">
        <FilterByCategories categories={categories} />
        <FilterByYear years={years} />
      </div>

      <FilterModal isOpen={isOpen} onClose={closeFilterModal}>
        <FilterByCategories categories={categories} />
        <FilterByYear years={years} />
      </FilterModal>
    </div>
  );
}
