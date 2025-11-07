export default function SkillTag({icon, name}) {
    const Icon = icon
    return (
        <span
            key={name}
            className="group flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
        >
            <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            {name}
        </span>
    )
}