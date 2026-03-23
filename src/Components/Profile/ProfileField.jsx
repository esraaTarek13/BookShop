import MainField from "./../Ui/MainField";

export default function ProfileField({ isEditing }) {
  return (
    <>
      <div className="w-full md:flex gap-4">
        <div className="flex flex-col gap-2 md:w-[50%]">
          <MainField
            name="first_name"
            type="text"
            id="first_name"
            label="First Name"
            readOnly={!isEditing}
          />
        </div>
        <div className="flex flex-col gap-2 md:w-[50%] mt-3 md:mt-0">
          <MainField
            name="last_name"
            type="text"
            id="last_name"
            label="Last Name"
            readOnly={!isEditing}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <MainField
          name="email"
          type="text"
          id="emailProfile"
          label="Email"
          readOnly={!isEditing}
        />
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <MainField
          name="phone"
          type="text"
          id="phone"
          label="Phone"
          placeholder="Phone number"
          readOnly={!isEditing}
        />
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <MainField
          name="address"
          type="text"
          id="address"
          label="Address"
          readOnly={!isEditing}
        />
      </div>
    </>
  );
}
