
// Original and discounted price
export default function SaleProductPrice({card}) {
    return (
        <div className='flex items-center gap-2 pt-4'>
            <p className='text-[12px] md:text-sm text-[#FFFFFF80]'>
                $ {card.price}
            </p>
            <p className='text-lg md:text-[22px] text-(--secondary-text-color)'>
                $ {card.final_price}
            </p>
        </div>
    )
}
