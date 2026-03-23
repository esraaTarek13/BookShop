import { UseHome } from "../../../Hooks/UseHome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SaleProductCard from "./SaleProductCard";
import Loader from "../../Ui/Loader";

// Displays flash sale products in a slider and handles loading/error states
export default function SaleProducts() {
  const { data, isLoading, isError, error } = UseHome();
  const items = data?.data?.recommended || [];

  if (isLoading) {
    return (
      <div className="min-h-75 flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-75 flex justify-center items-center">
        <p className="text-(--btn-color) text-lg font-(--text-font-weight) text-center">
          {error?.message || "Something went wrong"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[90%]">
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: "auto",
            autoWidth: true,
            pagination: false,
            gap:
              window.innerWidth < 640
                ? "16px"
                : window.innerWidth < 1024
                  ? "24px"
                  : "32px",
          }}
          className="flex items-center"
        >
          {items?.map((card) => (
            <SplideSlide key={card.bookId} className="max-w-75 sm:max-w-106">
              <SaleProductCard card={card} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
