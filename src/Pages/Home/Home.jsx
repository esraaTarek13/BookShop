import HeroSection from "../../Components/HeroSection/HeroSection";
import BestSeller from "../../Components/Home/BestSeller/BestSeller";
import FeaturesSection from "../../Components/Home/FeaturesSection/FeaturesSection";
import FlashSaleSection from "../../Components/Home/FlashSaleSection/FlashSaleSection";
import RecomendedSection from "../../Components/Home/RecomendedSection/RecomendedSection";


export default function Home() {
  return (
    <>
      <HeroSection height="h-[90vh]"/>
      <FeaturesSection />
      <BestSeller />
      <RecomendedSection />
      <FlashSaleSection />
    </>
  )
}
