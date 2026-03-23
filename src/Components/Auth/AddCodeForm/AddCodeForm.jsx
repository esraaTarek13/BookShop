import InputAddCode from "./InputAddCode";

// OTP Section
export default function AddCodeForm() {
  return (
    <div className="h-screen bg-(--main-color) pt-15 ">
      <div className="w-full px-3.75 mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%] space-y-5 md:space-y-10">
        <div className="text-center space-y-2 md:space-y-4">
          <h2 className="font-(--text-font-weight) text-(--btn-color) text-sm md:text-base">Reset your password!</h2>
          <p className="text-(--main-text-color-light) text-xs md:text-sm ">Enter the 4 dights code that you received on your email</p>
        </div>

        <InputAddCode />

        <div className="flex justify-center items-center gap-0.5">
          <p className="text-sm md:text-base">Didn’t receive a code?</p>
          <p className="text-(--btn-color) font-(--text-font-weight) text-sm md:text-base">Send again</p>
        </div>
      </div>
    </div>
  )
}
