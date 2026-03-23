import { FaPenClip } from "react-icons/fa6";

// Displays user profile image
export default function ProfileImage({ image }) {
    const imgSrc = image && image !== "default" ? image : "/images/Profile.jpg";
    return (
        <div className="absolute top-[30%]">
            <div className="relative">
                <div className="w-45 h-45 ">
                    <img
                        src={imgSrc}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="w-8 h-8 bg-(--btn-color) rounded-full flex justify-center items-center text-(--secondary-text-color) absolute bottom-[10%] right-[7%] cursor-pointer">
                    <FaPenClip />
                </div>
            </div>
        </div>
    )
}
