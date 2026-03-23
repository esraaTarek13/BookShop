import * as yup from "yup";

// Contact Validation
export const ContactSchema = (user) => {
    return yup.object({
        name: yup
            .string()
            .required("*Name is required")
            .test("match-user-name", "Name is wrong", function (value) {
                if (!user) {
                    return this.createError({ message: "You must be logged in" })
                }

                const fullName = `${user.first_name} ${user.last_name}`.toLowerCase().trim();
                return value?.toLowerCase().trim() === fullName;
            })
        ,

        email: yup
            .string()
            .required("*Email is required")
            .email("*Please enter a valid email")
            .test("match-user-email", "Email is wrong", function (value) {
                if (!user) {
                    return this.createError({ message: "You must be logged in" });
                }
                return value === user.email;
            }
            ),

        subject: yup
            .string()
            .required("Subject is required"),

        message: yup
            .string()
            .required("*Enter your message"),
    });
}

