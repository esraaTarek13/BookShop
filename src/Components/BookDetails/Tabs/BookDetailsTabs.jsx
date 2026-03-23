import { useState } from "react";
import ProductDetails from "../Details/ProductDetails";
import SaleProducts from "../../Home/FlashSaleSection/SaleProducts";

const tabs = ["Product Details", "Recommended For You"];

export default function BookDetailsTabs({ book }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabComponents = [<ProductDetails book={book} />, <SaleProducts />];

  return (
    <section className="min-h-150">
      <div className="flex gap-8 md:gap-15 lg:gap-20 mt-17.5 border-b-2 border-[#2222221A]">
        {tabs.map((tab, i) => (
          <p
            key={i}
            onClick={() => setActiveTab(i)}
            className={`pb-3 cursor-pointer font-(--header-font-weight) text-sm sm:text-base md:text-lg lg:text-[20px] transition-all duration-200
              ${
                activeTab === i
                  ? "text-(--main-text-color) border-b-2 border-[#EAA451]"
                  : "text-(--main-text-color-light) hover:text-(--main-text-color)"
              }`}
          >
            {tab}
          </p>
        ))}
      </div>

      <div className="Custom-container pt-10">{tabComponents[activeTab]}</div>
    </section>
  );
}
