import { useState } from "react";

export default function BookImage({ alt, width, images }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className={`${images ? "w-full lg:w-auto flex-col gap-4 md:gap-6.5" : "gap-0"} flex items-center`}>
      <div className={`${width} ${images ? "h-60 md:h-97.5 lg:h-90" : "h-auto"}`}>
        <img
          src={images?.[activeImg] || "/images/book1.png"}
          alt={alt || "Book Image"}
          className="w-full h-full object-fill"
        />
      </div>

      <div className="flex items-center gap-4">
        {images &&
          images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImg(i)}
              className={`${
                activeImg === i
                  ? "p-2.5 border border-(--btn-color)"
                  : "border-0"
              }`}
            >
              <div className="w-9 md:w-15.5 h-15 md:h-25 cursor-pointer">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
