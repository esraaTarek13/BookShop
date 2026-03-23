import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

// Contact section with form and contact info
export default function QuestionSection() {
  return (
    <section className="bg-(--secondary-color)">
      <div className="bg-[url(/images/questionImg.png)] h-full bg-cover bg-center">
        <div className="Custom-container h-full py-20 md:py-30 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between lg:justify-start">
          <div className="flex flex-col gap-15">
            <div>
              <h4 className="text-[28px] md:text-4xl lg:text-[40px] font-(--header-font-weight) text-(--secondary-text-color)">
                Have a Questions?
                <br />
                Get in Touch
              </h4>
              <p className="pt-4 text-[#FFFFFF80] md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
            </div>

            <ContactForm />
          </div>

          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
