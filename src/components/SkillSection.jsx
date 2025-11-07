import SkillTag from "./SkillTag"

export default function SkillSection({title, isVisible, index, skills}) {
    return (
        <div
            key={title}
            className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <h3 className="mb-4 font-mono text-xl font-semibold text-primary">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => <SkillTag key={`${title}-${skill.name}`} icon={skill.icon} name={skill.name} />)}
            </div>
        </div>
    );
}