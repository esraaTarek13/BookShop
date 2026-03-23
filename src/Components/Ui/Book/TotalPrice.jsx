export default function TotalPrice({ price }) {
  return (
    <div className="text-lg md:text-xl lg:text-[26px] font-(--text-font-weight) text-(--main-text-color)">
      ${price?.toFixed(2)}
    </div>
  );
}
