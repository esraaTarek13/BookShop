import { useLocation } from "react-router-dom"

export default function SocialButton() {
  const location = useLocation();
  return (
    <div className="w-full">
     <button className="w-full cursor-pointer p-4 rounded-(--btn-radius) text-(--secondary-text-color) font-(--text-font-weight) text-[18px] bg-(--secondary-text-color) flex gap-2.5 justify-center items-center">
        <img src="/images/g-icon.png" alt="Google"  className="object-contain"/>
        <span className="text-(--main-text-color) text-[14px]">{location.pathname === "/login"? "Login with Google" : "Sign up with Google"}</span>
     </button>
     <button className="w-full mt-3 cursor-pointer p-4 rounded-(--btn-radius) text-(--secondary-text-color) font-(--text-font-weight) text-[18px] bg-(--secondary-text-color) flex gap-2.5 justify-center items-center">
        <img src="/images/f-icon.png" alt="Facebook" className="object-contain"/>
        <span className="text-(--main-text-color) text-[14px]">{location.pathname === "/login"? "Login with Facebook" : "Sign up with Facebook"}</span>
     </button>
    </div>
  )
}
