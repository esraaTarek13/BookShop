import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import AuthModal from "./../Components/Ui/AuthModal";

export default function MainLayout() {
  return (
    <>
      <AuthModal />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
