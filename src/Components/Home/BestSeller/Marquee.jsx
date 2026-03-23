import { images } from "../../../Constants/SliderImages";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Marquee() {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: "auto",
        autoWidth: true,
        gap: "32px",
        autoScroll: {
          speed: 2,
        },
        arrows: false,
        pagination: false,
        slideFocus: false,
      }}
      extensions={{ AutoScroll }}
      className="flex items-center"
    >
      {images.map((image) => (
        <SplideSlide key={image.id}>
          <div className="w-22 h-33 sm:w-28 sm:h-43 md:w-35 md:h-52 lg:w-43.25 lg:h-65 overflow-hidden rounded-(--btn-radius)">
            <img
              src={image.src}
              alt="Book Image"
              className="h-full w-full object-cover"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
