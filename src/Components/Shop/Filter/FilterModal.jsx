import { IoClose } from "react-icons/io5";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function FilterModal({ isOpen, onClose, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={300}
      overlayClassName="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      className={`absolute left-0 top-0 h-full overflow-y-auto outline-none transition-transform duration-300
         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 bg-(--main-color) border-b border-[#22222233]">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 rounded-full bg-(--btn-color)" />
          <span className="font-(--header-font-weight) text-base text-(--main-text-color)">
            Filter
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full text-lg bg-[#D9176C1A] text-(--btn-color) hover:bg-(--btn-color) hover:text-white transition-all duration-200"
        >
          <IoClose />
        </button>
      </div>

      {/* Content */}
      <div className="bg-(--main-color) min-h-full px-6 py-4 space-y-6">{children}</div>
    </ReactModal>
  );
}
