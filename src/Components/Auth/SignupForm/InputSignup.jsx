import { Field, Form, Formik, ErrorMessage } from "formik";
import { registerSchema } from "../../../Validation/RegisterSchema";
import { UseRegister } from "../../../Hooks/UseRegister";
import AuthButton from "../Buttons/AuthButton";
import MainField from "../../Ui/MainField";

// Register Form
export default function InputSignup() {
  const { mutate } = UseRegister();

  return (
    <div className="w-full">
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: "",
          agree: false,
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        <Form>
          <div className="w-full md:flex gap-4">
            <div className="flex flex-col gap-2 md:w-[50%]">
              <MainField
                name="first_name"
                type="text"
                id="firstName"
                label="First Name"
                placeholder="John"
              />
            </div>

            <div className="flex flex-col gap-2 md:w-[50%]">
              <MainField
                name="last_name"
                type="text"
                id="lastName"
                label="Last Name"
                placeholder="Smith"
              />
            </div>
          </div>

          <MainField
            name="email"
            type="email"
            id="signupEmail"
            label="Email"
            placeholder="example@gmail.com"
          />

          <MainField
            name="password"
            type="password"
            id="signupPassword"
            label="Password"
            placeholder="Enter password"
            isPassword={true}
          />

          <MainField
            name="password_confirmation"
            type="password"
            id="confirmationPassword"
            label="Confirm password"
            placeholder="Enter password"
            isPassword={true}
          />

          <div className="flex gap-2">
            <Field
              name="agree"
              type="checkbox"
              id="agree"
              className="accent-(--btn-color)"
            />
            <label htmlFor="agree" className="text-sm md:text-base">
              Agree with
              <span className="text-(--btn-color) text-sm md:text-base">
                {" "}
                Terms & Conditions
              </span>
            </label>
          </div>
          <div className="h-3 md:h-5 mb-5">
            <ErrorMessage
              name="agree"
              component="p"
              className="text-(--btn-color) text-xs md:text-sm"
            />
          </div>

          {/* Signup Button */}
          <AuthButton content={"Sign Up"} />
        </Form>
      </Formik>
    </div>
  );
}
