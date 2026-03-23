import SaleProducts from "./SaleProducts";

// Flash Sale section displaying discounted products
export default function FlashSaleSection() {
  return (
    <section className="bg-(--main-color) py-15 md:py-20 lg:py-30 border-t border-(#22222233)">
      <div className="Custom-container h-full">
        <div className="pb-10 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="pb-1.5 text-xl md:text-[26] font-(--header-font-weight) text-(--main-text-color)">
              Flash Sale
            </h3>
            <p className="text-(--main-text-color-light) text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
        </div>

        <div className="min-h-[50vh]">
          {/* Slider Prodects */}
          <SaleProducts />
        </div>
      </div>
    </section>
  );
}
