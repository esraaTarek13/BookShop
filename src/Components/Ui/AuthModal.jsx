import { Link } from "react-router-dom";
import useModalStore from "../../Stores/useModalStore";
import Modal from "react-modal";

export default function AuthModal() {
  // Get modal state and close function from Zustand store
  const isOpen = useModalStore((state) => state.isAuthModalOpen);
  const close = useModalStore((state) => state.closeAuthModal);


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      overlayClassName="fixed inset-0 z-10 bg-black/50 flex justify-center items-center"
      className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[40%] bg-(--secondary-text-color) border-[#22222233] rounded-(--section-radius) p-15 text-center"
    >
      <h3 className="text-[20px] md:text-2xl font-(--text-font-weight) pb-10">
        Your should log in first!
      </h3>
      <div className="flex flex-col gap-4">
        <Link
          to="/login"
          onClick={close}
          className="bg-(--btn-color) text-(--secondary-text-color) border border-(--btn-color) rounded-(--btn-radius) outline-0 py-3.25 text-[12px] md:text-[14px] lg:text-[16px] cursor-pointer hover:bg-transparent hover:text-(--btn-color) transition-all duration-300"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          onClick={close}
          className="bg-(--secondary-text-color) text-(--btn-color) border border-(--btn-color) rounded-(--btn-radius) outline-0 py-3.25 text-[12px] md:text-[14px] lg:text-[16px] cursor-pointer"
        >
          Create account
        </Link>
      </div>
    </Modal>
  );
}
