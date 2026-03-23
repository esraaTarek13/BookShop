import MissionsSection from "../../Components/About/MissionsSection/MissionsSection";
import QuestionSection from "../../Components/About/QuestionSection/QuestionSection";
import HeroSection from "../../Components/HeroSection/HeroSection";
import FeaturesSection from "../../Components/Home/FeaturesSection/FeaturesSection";

export default function About() {
  return (
    <>
      <HeroSection height="h-[90vh]" />
      <MissionsSection />
      <QuestionSection />
      <FeaturesSection />
    </>
  )
}
