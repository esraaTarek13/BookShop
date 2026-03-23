import { BiUser } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiOutlineExclamationCircle } from "react-icons/hi";

// Progile Menu data
export const ProfileMenuItems = [
    {
        id: 1,
        icon: <BiUser />,
        label: "Profile",
        url: "/profile"

    },
    {
        id: 2,
        icon: <MdOutlineWatchLater />,
        label: "Order History",
        url: "/order-history"

    },
    {
        id: 3,
        icon: <CiLocationOn />,
        label: "Address",
        url: "#"

    },
    {
        id: 4,
        icon: <HiOutlineExclamationCircle />,
        label: "Help",
        url: "#"

    },
    {
        id: 5,
        icon: <FaArrowRightFromBracket />,
        label: "Log Out",
        url: "/login"

    },
];
