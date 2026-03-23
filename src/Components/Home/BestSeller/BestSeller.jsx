import Marquee from "./Marquee";
import ShopButton from "./ShopButton";


// Best Seller section
export default function BestSeller() {
    return (
        <section className="overflow-hidden bg-(--secondary-color) py-30 flex flex-col gap-10 md:gap-15 lg:gap-20 items-center justify-center text-(--secondary-text-color)">
            <div className="text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
                <h3 className="text-[23px] md:text-[26px] font-(--header-font-weight)">Best Seller</h3>
                <p className="text-[14px] md:text-[16px] pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>

            <Marquee />

            <ShopButton />
        </section>
    )
}
