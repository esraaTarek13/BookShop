import useModalStore from "./useModalStore";
import { useAuthStore } from "./useAuthStore";

export const useRequireAuth = () => {
  const openAuthModal = useModalStore((state) => state.openAuthModal);
  const token = useAuthStore((state) => state.token);

  return (action) => {
    token ? action() : openAuthModal();
  };
};
