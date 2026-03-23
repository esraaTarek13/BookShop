import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../constants/NavLinks";

// Navigation links
export default function NavLinks() {
  const location = useLocation()

  return (
    <>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            to={`/${link.path}`}
            className={`text-[16px] lg:text-[18px] transition-colors duration-300 ${location.pathname === `/${link.path}` ? "text-(--first-text-yellow-color)" : "hover:text-(--first-text-yellow-color)"
              }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}
