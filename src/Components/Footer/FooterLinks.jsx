import { Link } from "react-router-dom";
import FooterIcons from "./FooterIcons";
import { navLinks } from "../../constants/NavLinks";


export default function FooterLinks() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between md:items-center pb-4">
                <div className="flex flex-col md:flex-row gap-10 font-(--text-font-weight) \">
                    <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>

                    <ul className="flex flex-col md:flex-row gap-6 md:items-center">
                        {navLinks.map((link , index) => (
                            <li key={index} className="hover:text-(--first-text-yellow-color) transition-colors duration-300 text-[14px] md:text-[16px]"><Link to={`/${link.path}`}>{link.name}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Social Icons */}
                <FooterIcons />
            </div>
        </>
    )
}
