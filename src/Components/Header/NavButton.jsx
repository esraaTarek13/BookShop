import { Link } from "react-router-dom";

export default function NavButton() {
  return (
    <div className="flex gap-3 items-center">
      {/* Log in button */}
      <Link
        to="/login"
        className="
          relative overflow-hidden
          text-(--secondary-text-color)
          py-2 px-2.75 lg:py-2.75 lg:px-4
          rounded-(--btn-radius)
          outline-0
          text-[12px] md:text-[14px] lg:text-[16px]
          bg-(--btn-color)
          border border-(--btn-color)
          transition-all duration-300 ease-in-out
          hover:bg-transparent
          hover:text-(--btn-color)
          hover:shadow-[0_0_12px_2px_var(--btn-color)]
          active:opacity-75
        "
      >
        Log in
      </Link>

      {/* Sign Up button */}
      <Link
        to="/signup"
        className="
          relative overflow-hidden
          py-2 px-2.75 lg:py-2.75 lg:px-4
          bg-(--secondary-text-color)
          text-(--btn-color)
          border border-(--btn-color)
          rounded-(--btn-radius)
          outline-0
          text-[12px] md:text-[14px] lg:text-[16px]
          transition-all duration-300 ease-in-out
          hover:bg-transparent
          hover:brightness-110
          hover:shadow-[0_0_12px_2px_var(--btn-color)]
          active:opacity-75
        "
      >
        Sign Up
      </Link>
    </div>
  );
}