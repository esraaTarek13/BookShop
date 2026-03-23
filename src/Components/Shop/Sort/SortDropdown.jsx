import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { SortOptions } from "../../../Constants/SortOptions";
import { useCloseOnOutsideClick } from "../../../Hooks/UseCloseOnOutsideClick";

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const selectedLabel =
    SortOptions.find((o) => o.value === selected)?.label || "Sort by";

  const ref = useRef(null);
  useCloseOnOutsideClick(ref, isOpen, () => setIsOpen(false));

  return (
    <div
      ref={ref}
      className="w-full lg:w-auto min-w-fit relative border border-[#0000001A] rounded-(--btn-radius) text-(--main-text-color-light)"
    >
      {/* Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${selected ? "text-(--main-text-color)" : ""} min-w-55 flex justify-between items-center py-2.5 px-4 cursor-pointer`}
      >
        <button className="text-sm lg:text-base cursor-pointer">{selectedLabel}</button>
        <button className="text-xl cursor-pointer">
          {isOpen ? <RiArrowDownSLine /> : <IoIosArrowForward />}
        </button>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="w-full absolute z-50 top-[calc(100%+8px)] bg-white p-2 rounded-(--btn-radius) shadow-lg space-y-0.5">
          {SortOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setIsOpen(false);
                setSelected(selected === option.value ? null : option.value);
              }}
              className={`${selected === option.value ? "bg-[#EAA4511A]" : "bg-transparent"} cursor-pointer hover:bg-[#EAA4511A] rounded-(--btn-radius) p-3.5`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
