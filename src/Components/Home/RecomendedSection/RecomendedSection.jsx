import RecomendedCart from "./RecomendedCart";

// Recommended products section
export default function RecomendedSection() {
    return (
        < section className="bg-(--main-color) py-15 md:py-20 lg:py-30" >
            <div className="Custom-container h-full">
                <h3 className="pb-10 text-xl md:text-[26] font-(--header-font-weight) text-(--main-text-color)">Recomended For You</h3>
                <div className="flex justify-center items-center min-h-[50vh]">
                    <RecomendedCart />
                </div>
            </div>
        </section >
    )
}
