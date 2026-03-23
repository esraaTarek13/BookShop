import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function FilterBox({ title, children, showAll, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-w-70 bg-white rounded-(--btn-radius) p-4">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${isOpen ? "text-[#D9176C80]" : "text-(--main-text-color)"} flex justify-between items-center`}
      >
        <p className="font-(--text-font-weight) lg:text-lg">{title}</p>

        <button className="text-xl cursor-pointer">
          {isOpen ? <RiArrowDownSLine /> : <IoIosArrowForward />}
        </button>
      </div>

      {isOpen && <div className="mt-4 space-y-2.5">{children}</div>}

      {isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className="w-full text-(--btn-color) font-(--text-font-weight) text-sm text-center cursor-pointer mt-2"
        >
          {showAll ? "Show Less" : "Load More"}
        </button>
      )}
    </div>
  );
}
