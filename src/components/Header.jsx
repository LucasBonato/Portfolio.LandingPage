import info from "../data/info"

export function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
                <div className="font-mono text-lg font-bold">
                    <span className="text-primary">&#123;</span>
                    <span>Lucas Bonato</span>
                    <span className="text-primary">&#125;</span>
                </div>
                <nav className="flex items-center gap-4">
                    {info.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative transition-colors hover:text-primary"
                            aria-label={link.label}
                        >
                            <link.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
