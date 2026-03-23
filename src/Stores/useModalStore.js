import { create } from "zustand";

const useModalStore = create((set) => ({
  isAuthModalOpen: false,
  isProfileMenuOpen: false,
  isMobileMenuOpen: false,
  isFilterModalOpen: false,
  isOrderSuccessModalOpen: false,

  openAuthModal: () => set({ isAuthModalOpen: true }),
  closeAuthModal: () => set({ isAuthModalOpen: false }),

  toggleProfileMenu: () =>
    set((state) => ({ isProfileMenuOpen: !state.isProfileMenuOpen })),
  closeProfileMenu: () => set({ isProfileMenuOpen: false }),

  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  openFilterModal: () => set({ isFilterModalOpen: true }),
  closeFilterModal: () => set({ isFilterModalOpen: false }),

  openOrderSuccessModal: () => set({ isOrderSuccessModalOpen: true }),
  closeOrderSuccessModal: () => set({ isOrderSuccessModalOpen: false }),
}));

export default useModalStore;
