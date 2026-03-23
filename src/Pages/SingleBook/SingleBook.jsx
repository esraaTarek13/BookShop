import HeroSection from "../../Components/HeroSection/HeroSection";
import BookDetails from './../../Components/BookDetails/BookDetails';

export default function SingleBook() {
  return (
    <>
      <HeroSection height="h-[15vh]" />
      <div className="bg-(--main-color)">
        <div className="Custom-container">
          <BookDetails />
        </div>
      </div>
    </>
  );
}
