import { features } from './../../../Constants/Features';

// Features section 
export default function FeaturesSection() {
    return (
        <section className="py-20 lg:py-30 bg-(--main-color)">
            <div className="Custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12.5 lg:gap-15.25">
                {features.map((feature) => (
                    <div key={feature.id}>
                        <div className="w-7.5 pb-4">
                            <img src={feature.icon} alt="Service Icon" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="text-(--main-text-color) text-[16px] md:text-[18px] font-(--header-font-weight)">{feature.title}</h3>
                            <p className="text-(--main-text-color-light) text-[14px] md:text-[16px] pt-2">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
