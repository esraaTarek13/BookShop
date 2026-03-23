import { Link } from "react-router-dom";
import useModalStore from "../../Stores/useModalStore";
import { ProfileMenuItems } from "../../Constants/ProfileMenuItems";
import { UseLogOut } from "../../Hooks/UseLogout";

export default function ProfileMenu() {
  const isOpen = useModalStore((state) => state.isProfileMenuOpen);
  const close = useModalStore((state) => state.closeProfileMenu);
  const { mutate: logOut } = UseLogOut();

  return (
    <ul
      className={`${isOpen ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"}
            transition-all duration-300 flex flex-col gap-4 bg-(--secondary-text-color) rounded-(--btn-radius) p-6 absolute top-[15%] md:top-[160%] left-[25%] md:left-auto md:right-0 z-50`}
    >
      {ProfileMenuItems.map((item) => (
        <li
          key={item.id}
          className="flex items-center gap-2.5 p-3 text-(--main-text-color)"
        >
          <span>{item.icon}</span>
          <Link
            to={item.url}
            className="font-(--text-font-weight)"
            onClick={() => {
              close();
              item.label === "Log Out" && logOut();
            }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
