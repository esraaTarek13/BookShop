import { Link } from "react-router-dom";
import SocialButton from './../Buttons/SocialButton';
import InputLogin from "./InputLogin";


// Login Section
export default function LoginForm() {
    return (

        <div className="h-[150vh] bg-(--main-color) pt-15 ">
            <div className="w-full px-3.75 mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col items-center gap-5 md:gap-10">
                <h2 className="font-(--text-font-weight) text-(--btn-color) text-sm md:text-base">Welcome Back!</h2>

                {/* Form */}
                <InputLogin />

                <div className="flex gap-0.5">
                    <p className="text-sm md:text-base">Don’t have an account?</p>
                    <Link to="/signup" className="text-(--btn-color) font-(--text-font-weight) text-sm md:text-base">Signup</Link>
                </div>

                <p className="text-(--main-text-color-light) text-sm md:text-base">or</p>

                <SocialButton />
            </div>
        </div>
    )
}
