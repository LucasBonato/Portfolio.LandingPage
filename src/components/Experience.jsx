import { useState } from "react"
import { Calendar } from "lucide-react"
import { useSectionVisible } from "../hooks/useSectionVisible"
import SectionTitle from "./SectionTitle";
import experiences from "../data/experiences";
import TechnologyTag from "./TechnologyTag";

export function Experience() {
    const { sectionRef, isVisible } = useSectionVisible();
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <section id="experience" ref={sectionRef} className="section-separator min-h-screen px-6 py-20 lg:px-12">
            <div className="mx-auto max-w-4xl">
                <div
                    className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                >
                    <SectionTitle title="Professional Experience"/>

                    <div className="relative space-y-16">

                        {experiences.map((experience, index) => (
                            <div
                                key={index}
                                className={`group relative pl-12 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className={`absolute left-0 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 transition-all duration-500 ${hoveredIndex === index
                                            ? "border-primary bg-primary shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                                            : "border-border bg-background"
                                        }`}
                                />
                                {index < experiences.length && (
                                    <div
                                        className={`absolute left-0 top-6 h-full w-0.5 -translate-x-1/2 transition-all duration-500 ${hoveredIndex === index ? "bg-primary shadow-[0_0_10px_rgba(168,85,247,0.5)]" : "h-full w-0.5 bg-border/50"}`}
                                    />
                                )}

                                <div className="mb-3 flex flex-wrap items-center gap-3">
                                    <h3 className="text-3xl font-bold text-balance sm:text-4xl">{experience.role}</h3>
                                    <span className="text-2xl text-primary">@</span>
                                    <span className="text-2xl font-semibold text-muted-foreground">{experience.company}</span>
                                </div>

                                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>{experience.period}</span>
                                </div>

                                <p className="mb-4 leading-relaxed text-muted-foreground text-pretty">{experience.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech) => <TechnologyTag name={tech}/>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}