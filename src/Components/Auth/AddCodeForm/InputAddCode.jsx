import { Form, Formik } from "formik";
import OTPInput from "react-otp-input";
import AuthButton from "./../Buttons/AuthButton";
import { useNavigate } from "react-router-dom";

export default function InputAddCode() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ otp: "" }}
      onSubmit={(values) => {
        localStorage.setItem("otp", values.otp);
        navigate("/reset-password");
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="flex justify-center pb-5 md:pb-10">
            <OTPInput
              value={values.otp}
              onChange={(otp) => setFieldValue("otp", otp)}
              numInputs={6}
              isInputNum={true}
              shouldAutoFocus={true}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-10! h-10! md:w-15! md:h-15! mx-1.5 md:mx-4 lg:mx-6 border border-[#2222224D] outline-0 focus:border-(--main-text-color) rounded-xl text-center font-(--text-font-weight) text-lg md:text-[22px] transition duration-300"
                />
              )}
            />
          </div>
          <AuthButton content={"Next"} />
        </Form>
      )}
    </Formik>
  );
}
