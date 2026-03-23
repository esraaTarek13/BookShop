import { Missions } from "../../../Constants/Missions";

// Missions section
export default function MissionsSection() {
    return (
        <section className="py-20 lg:py-30 bg-(--main-color)">
            <div className="Custom-container grid grid-cols-1 md:grid-cols-3 gap-12.5 lg:gap-15.25">
                {Missions.map((mission) => (
                    <div key={mission.id} className="bg-white p-6 rounded-xl flex flex-col justify-between gap-6 hover:shadow-xl transition duration-200">
                        <div>
                            <h3 className="text-(--main-text-color) text-[18px] lg:text-[22px] font-(--header-font-weight)">{mission.title}</h3>
                            <p className="text-(--main-text-color-light) text-[14px] md:text-[16px] pt-4 lg:pt-6">{mission.description}</p>
                        </div>

                        <div className="flex items-center gap-2 text-(--btn-color) text-ms md:text-base cursor-pointer group">
                            <p>{mission.actionText}</p>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">{mission.icon}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
