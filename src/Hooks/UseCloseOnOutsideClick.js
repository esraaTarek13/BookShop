import { useEffect } from "react";

export const useCloseOnOutsideClick = (ref, isOpen, close) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, ref, close]);
};
