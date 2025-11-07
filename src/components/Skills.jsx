import { useSectionVisible } from "../hooks/useSectionVisible"
import SkillSection from "./SkillSection";
import SectionTitle from "./SectionTitle";
import skills from "../data/skills";

export function Skills() {
    const { sectionRef, isVisible } = useSectionVisible();

    return (
        <section id="skills" ref={sectionRef} className="section-separator min-h-screen px-6 py-20 lg:px-12">
            <div className="mx-auto max-w-4xl">
                <div
                    className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                >
                    <SectionTitle title="Skills"/>
                    <div className="grid gap-8 sm:grid-cols-2">
                        {skills.map((category, categoryIndex) => (
                            <SkillSection
                                index={categoryIndex}
                                isVisible={isVisible}
                                skills={category.skills}
                                title={category.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}