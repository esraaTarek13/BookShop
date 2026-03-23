import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-(--main-color) flex flex-col justify-center items-center gap-8 px-4">
      {/* Big 404 */}
      <div className="relative select-none">
        <p className="flex items-center justify-center text-(--btn-color) opacity-[0.15] text-[120px] md:text-[180px] font-bold leading-none">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl md:text-5xl">📖</span>
        </div>
      </div>

      {/* Text */}
      <div className="text-center space-y-3 max-w-md">
        <h1 className="text-(--main-text-color) text-2xl md:text-3xl font-(--header-font-weight)">
          Page Not Found
        </h1>
        <p className="text-(--main-text-color-light) text-base md:text-lg font-(--text-font-weight)">
          Looks like this page doesn't exist or has been moved.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => navigate("/", { replace: true })}
          className="bg-(--btn-color) px-8 py-3 rounded-(--btn-radius) font-(--text-font-weight) text-white transition-opacity hover:opacity-85 cursor-pointer"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-(--btn-color-light) px-8 py-3 rounded-(--btn-radius) border border-(--btn-color) font-(--text-font-weight) text-(--btn-color) transition-colors hover:opacity-85 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
