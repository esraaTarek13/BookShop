import { TiWorld } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa6";
import FooterLinks from "./FooterLinks";


export default function Footer() {
  return (
    <footer className="py-10 md-py-0 md:h-[40vh] bg-(--secondary-color) text-(--secondary-text-color)">
      <div className="Custom-container h-full flex flex-col justify-center">
        <FooterLinks />

        <div className="flex flex-col-reverse md:flex-row justify-between md:items-center border-t border-[#FFFFFF80] pt-4">
          {/* Copyright text */}
          <p className="pt-6 md:pt-0 text-[12px] lg:text-[16px] text-center md:text-start">
            &lt;Developed By&lt; EraaSoft &lt;All Copy Rights Reserved @2024
          </p>

          {/* Language selector */}
          <div className="flex gap-4 items-center">
            <TiWorld className="text-4xl" />
            <div className="w-full md:-w-fit flex justify-between items-center border border-[#FFFFFF80] rounded-(--btn-radius) p-2 lg:p-4 text-[#FFFFFF80]">
              <input type="text" placeholder="English" className="outline-0 " />
              <FaAngleRight className="text-lg md:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
