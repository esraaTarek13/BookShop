
// Stock progress bar and remaining quantity 
export default function SaleProductStock({ card }) {
    const totalStock = 100;
    const percentage = (card.stock / totalStock) * 100;

    return (
        <div className='pt-4'>
            <div className='w-full h-2 bg-[#FFFFFF1A] rounded-(--section-radius)'>
                <div className='h-2 bg-(--first-text-yellow-color) rounded-(--section-radius)'
                    style={{ width: `${percentage}%` }}>
                </div>
            </div>
            <p className='text-[12px] text-[#FFFFFF80] pt-2.25'>
                {card.stock} books left
            </p>
        </div>
    )
}
