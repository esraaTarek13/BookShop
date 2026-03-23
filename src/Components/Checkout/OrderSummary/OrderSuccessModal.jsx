import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

Modal.setAppElement("#root");

export default function OrderSuccessModal({ isOpen, closeModal }) {
  const navigate = useNavigate();

  const handleKeepShopping = () => {
    closeModal();
    navigate("/books");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="w-[80%] sm:w-[70%] md:w-[60%] xl:w-[50%] p-8 sm:p-10 lg:p-15 bg-white rounded-(--section-radius) mx-auto outline-none"
      overlayClassName="fixed inset-0 z-10 bg-black/50 flex justify-center items-center text-center"
    >
      <div className="flex flex-col items-center gap-1.5 md:gap-2.5 pb-6 md:pb-10">
        <IoCheckmarkCircleSharp className="mb-2 md:mb-3.5 text-6xl md:text-9xl text-[#34A853]" />

        <h2 className="text-(--main-text-color) font-(--text-font-weight) text-xl md:text-2xl">
          Successful!
        </h2>
        <p className="text-sm md:text-base text-(--main-text-color-light)">
          Your order has been confirmed
        </p>
      </div>

      <button
        onClick={handleKeepShopping}
        className="w-full bg-(--btn-color) font-(--text-font-weight) text-white py-2.5 md:py-3.25 rounded-(--btn-radius) text-sm md:text-base hover:bg-transparent hover:text-(--btn-color) hover:shadow-[0_0_12px_2px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75"
      >
        Keep shopping
      </button>
    </Modal>
  );
}
