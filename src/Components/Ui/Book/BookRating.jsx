import { renderStars } from "../../../Utils/RenderStars";

export default function BookRating({rate, countReview}) {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-1 items-center text-(--second-text-yellow-color)">
          {renderStars(rate || 0)}
        </div>
        <div className="text-(--main-text-color-light) font-(--text-font-weight) text-[12px]">
          ({countReview || 0} Review{countReview !== 1 ? "s" : ""})
        </div>
      </div>

      <div className="text-sm text-(--main-text-color-light) mt-2">
        Rate:
        <span className="font-(--text-font-weight) text-(--main-text-color)">
          {rate || "0"}
        </span>
      </div>
    </div>
  );
}
