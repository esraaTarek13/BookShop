import { useProfile } from "../../Hooks/UseProfile"
import Loader from "../Ui/Loader"
import ProfileForm from "./ProfileForm"

// Profile Section
export default function ProfileInfo() {
    const { data, isLoading, isError, error } = useProfile()

    // User values for the profile form
    const profileData = {
        first_name: data?.first_name || "",
        last_name: data?.last_name || "",
        email: data?.email || "",
        image: data?.image || "default",
        phone: data?.phone || "",
        address: data?.address || "",
    }


    return (
        <section className="bg-(--main-color) min-h-screen flex justify-center items-center">
            {isLoading && <Loader />}

            {isError && <div className="text-(--btn-color) text-lg font-(--text-font-weight) text-center">
                {error?.message || "An unexpected error occurred"}
            </div>}

            {!isLoading && !isError &&
                <div className="self-start w-full px-3.75 sm:w-[80%] md:w-[70%] lg:w-[60%] mb-20">
                    <ProfileForm profileData={profileData} />
                </div>
            }
        </section>

    )
}
