import info from "../data/info"
export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background px-6 py-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex items-center gap-6">
                        {info.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-primary"
                                aria-label={link.label}
                            >
                                <link.icon className="h-6 w-6" />
                            </a>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} | Lucas Perez Bonato.
                    </p>
                </div>
            </div>
        </footer>
    )
}
