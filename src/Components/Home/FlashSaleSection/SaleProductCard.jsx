import SaleProductInfo from "./SaleComponents/SaleProductInfo";
import SaleProductRating from "./SaleComponents/SaleProductRating";
import SaleProductPrice from "./SaleComponents/SaleProductPrice";
import SaleProductStock from "./SaleComponents/SaleProductStock";
import SaleProductCartButton from "./SaleComponents/SaleProductCartButton";
import BookImage from "../../Ui/Book/BookImage";
import { Link } from "react-router-dom";

// Card component for a single sale product
export default function SaleProductCard({ card }) {
  return (
    <div className="max-w-75 sm:max-w-106 flex flex-col sm:flex-row gap-6 bg-(--secondary-color) p-4 rounded-(--btn-radius)">
      <Link to={`/single-book/${card.bookId}`}>
        <BookImage alt={card.bookName} width={"w-27 sm:w-44"} />
      </Link>

      <div>
        <Link to={`/single-book/${card.bookId}`}>
          <SaleProductInfo card={card} />
        </Link>

        <SaleProductRating card={card} />
        <SaleProductPrice card={card} />
        <SaleProductStock card={card} />
        <SaleProductCartButton id={card.bookId} />
      </div>
    </div>
  );
}
