
export default function PaymentRow({ label, value, isTotal = false }) {
    return (
        <div className="flex justify-between items-center">
            <p className="text-(--main-text-color-light) text-base md:text-lg lg:text-xl">{label}</p>
            <span className={isTotal
                ? "font-(--header-font-weight) text-(--btn-color) text-lg md:text-xl lg:text-2xl"
                : "font-(--text-font-weight) text-(--main-text-color) text-base md:text-lg lg:text-xl"
            }>
                {value}
            </span>
        </div>
    )
}
