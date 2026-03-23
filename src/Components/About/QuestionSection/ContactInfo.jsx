import { Contact } from "../../../Constants/Contact";

// Contact info list
export default function ContactInfo() {
  return (
    <div className="flex lg:justify-center lg:items-start">
      <ul className="flex flex-col gap-6 justify-center">
        {Contact.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex justify-center items-center text-(--btn-color) text-sm md:text-xl bg-(--secondary-text-color) rounded-(--btn-radius)">
              {item.icon}
            </div>
            <div className="text-(--secondary-text-color) text-sm md:text-base">
              {item.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
