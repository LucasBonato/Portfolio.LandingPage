const sections = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
]

export function ScrollNav({ activeSection }) {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
            <div className="relative flex flex-col items-center gap-8">
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border/50" />

                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group relative z-10 transition-all duration-300"
                        aria-label={`Navigate to ${section.label}`}
                    >
                        <div
                            className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-500 ${activeSection === section.id
                                    ? "scale-125 border-primary bg-primary shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                                    : "border-muted-foreground/50 bg-background group-hover:border-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                                }`}
                        />

                        <span
                            className={`absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-card/90 backdrop-blur-sm px-3 py-1.5 text-sm font-medium shadow-lg opacity-0 transition-all duration-300 group-hover:right-10 group-hover:opacity-100 ${activeSection === section.id ? "text-primary" : "text-muted-foreground"}`}
                        >
                            {section.label}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    )
}