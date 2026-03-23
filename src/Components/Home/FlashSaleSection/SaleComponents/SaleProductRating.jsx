import { renderStars } from './../../../../Utils/RenderStars';

// Rating stars and review count 
export default function SaleProductRating({ card }) {
    return (
        <>
            <div className='flex items-center gap-2'>
                <div className="flex gap-1 items-center text-(--second-text-yellow-color)">
                    {renderStars(card.rate || 0)}
                </div>
                <div className='text-[12px] text-[#FFFFFF80]'>
                    ({card.countReview || 0} Review{card.countReview !== 1 ? "s" : ""})
                </div>
            </div>
            <p className='text-[12px] text-[#FFFFFF80] pt-1'>
                Rate: <span className='font-(--text-font-weight) text-(--secondary-text-color)'>{card.rate || 0}</span>
            </p>
        </>

    )
}
