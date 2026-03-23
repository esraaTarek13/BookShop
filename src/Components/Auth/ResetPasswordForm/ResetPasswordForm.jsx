import InputResetPassword from "./InputResetPassword";

export default function ResetPasswordForm() {
    return (
        <div className="h-screen bg-(--main-color) pt-15 ">
            <div className="w-full px-3.75 mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%] space-y-5 md:space-y-10">
                <div className="text-center space-y-2 md:space-y-4">
                    <h2 className="font-(--text-font-weight) text-(--btn-color) text-sm md:text-base">Create new password!</h2>
                    <p className="text-(--main-text-color-light) text-xs md:text-sm">
                        Create a strong password <br /> Your new password must be different from previous one
                    </p>
                </div>

                <InputResetPassword />
            </div>
        </div>
    )
}
