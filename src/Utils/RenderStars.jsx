import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

// Render 5 stars: filled or empty based on rating
export const renderStars = (rate = 0) => {
    const fullStars = Math.round(rate);
    return Array.from({ length: 5 }, (_, i) =>
        i < fullStars ? <FaStar key={i} /> : <CiStar key={i} />
    );
};