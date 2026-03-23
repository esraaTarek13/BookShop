
// Book name, author
export default function SaleProductInfo({ card }) {
    return (
        <div className='mb-4'>
            <h4 className='text-sm md:text-base font-(--header-font-weight) text-(--secondary-text-color) truncate max-w-47'>
                {card.bookName || "No title"}
            </h4>
            <p className='text-[12px] text-[#FFFFFF80]'>
                Author: <span className='text-(--secondary-text-color)'>
                    {card.author || "Unknown"}
                </span>
            </p>
        </div>
    )
}
