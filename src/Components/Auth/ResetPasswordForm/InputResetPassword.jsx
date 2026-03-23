import { Field, Form, Formik } from "formik";
import { ResetPasswordSchema } from "../../../Validation/ResetPasswordSchema";
import AuthButton from "../Buttons/AuthButton";
import MainField from "../../Ui/MainField";
import { UseResetPassword } from "../../../Hooks/UseResetPassword";

export default function InputResetPassword() {
  const { mutate: resetPassword } = UseResetPassword();

  const handleSubmit = (values) => {
    const otp = localStorage.getItem("otp");
    const email = localStorage.getItem("email");

    resetPassword(
      {
        email,
        password: values.password,
        password_confirmation: values.password_confirmation,
        otp,
      },
      {
        onSuccess: () => {
          (localStorage.removeItem("otp"), localStorage.removeItem("email"));
        },
      },
    );
  };
  return (
    <Formik
      initialValues={{
        password: "",
        password_confirmation: "",
        checked: false,
      }}
      validationSchema={ResetPasswordSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <MainField
          name="password"
          type="password"
          id="resetPassword"
          label="Password"
          placeholder="Enter password"
          isPassword={true}
        />

        <MainField
          name="password_confirmation"
          type="password"
          id="reset-ConfirmPassword"
          label="Confirm password"
          placeholder="Enter password"
          isPassword={true}
        />

        <div className="flex gap-2 pb-5 md:pb-10">
          <Field
            name="checked"
            type="checkbox"
            id="checkedRememberMe"
            className="accent-(--btn-color)"
          />
          <label htmlFor="checkedRememberMe" className="text-sm md:text-base">
            Remember me
          </label>
        </div>

        <AuthButton content={"Reset password"} />
      </Form>
    </Formik>
  );
}
