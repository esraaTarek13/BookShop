import { useLocation } from "react-router-dom";
import InputSearch from "../Ui/InputSearch";
import AboutHeroContent from "./ِAboutHeroContent";

export default function HeroSection({ height }) {
  const location = useLocation();

  return (
    <section className={`relative ${height}`}>
      <img
        src="/images/hero.png"
        alt="Hero Image"
        className="w-full h-full object-cover scale-x-[-1]"
      />
      <div
        className={`${location.pathname === "/about" ? "bg-[#000000CC]" : "bg-(--gradient-color)"} absolute inset-0  flex items-center justify-center`}
      >
        {location.pathname === "/" ? (
          <InputSearch
            color={"(--btn-color)"}
            icon={"white"}
            width={"w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]"}
          />
        ) : location.pathname === "/about" ? (
          <AboutHeroContent />
        ) : null}
      </div>
    </section>
  );
}
