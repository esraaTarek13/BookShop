import { create } from "zustand";

const useFilterStore = create((set) => ({
  activeCategories: [],
  toggleCategory: (id) =>
    set((state) => ({
      activeCategories: state.activeCategories.includes(id)
        ? state.activeCategories.filter((c) => c !== id)
        : [...state.activeCategories, id],
      page: 1,
    })),

  activeYears: [],
  toggleYear: (id) =>
    set((state) => ({
      activeYears: state.activeYears.includes(id)
        ? state.activeYears.filter((y) => y !== id)
        : [...state.activeYears, id],
      page: 1,
    })),

  page: 1,
  setPage: (page) =>
    set((state) => ({
      page: typeof page === "function" ? page(state.page) : page,
    })),

  showAllCategories: false,
  toggleShowAllCategories: () =>
    set((state) => ({ showAllCategories: !state.showAllCategories })),

  showAllYears: false,
  toggleShowAllYears: () =>
    set((state) => ({ showAllYears: !state.showAllYears })),
}));

export default useFilterStore;
