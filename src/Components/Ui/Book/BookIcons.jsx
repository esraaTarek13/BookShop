import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";

export default function BookIcons() {
  return (
    <ul className="flex flex-col md:flex-row justify-center items-center gap-2 text-base md:text-lg lg:text-xl pl-3 md:pl-4.5 lg:pl-6">
      <li className="flex justify-center items-center p-1.5 bg-[#1877F2] rounded-full text-white hover:scale-110 transition-transform cursor-pointer">
        <GrFacebookOption />
      </li>
      <li className="flex justify-center items-center p-1.5 bg-linear-to-bl from-[#515BD4] via-[#9537B0] via-[#DD2A7B] to-[#FAAD4F] rounded-full text-white hover:scale-110 transition-transform cursor-pointer">
        <IoLogoInstagram />
      </li>
      <li className="flex justify-center items-center p-1.5 bg-black rounded-full text-white hover:scale-110 transition-transform cursor-pointer">
        <RiTwitterXLine />
      </li>
      <li className="flex justify-center items-center p-1.5 bg-[#00E510] rounded-full text-white hover:scale-110 transition-transform cursor-pointer">
        <IoLogoWhatsapp />
      </li>
      <li className="text-[#22222280] text-xl md:text-2xl lg:text-3xl pl-2">
       <FiShare2 />
      </li>
    </ul>
  );
}
