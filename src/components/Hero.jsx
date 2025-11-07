import { useEffect, useState } from "react"

export function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section id="hero" className="flex min-h-screen items-center justify-center px-6 py-20">
            <div className="max-w-max text-center flex justify-center items-center flex-col">
                <div
                    className={`transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <h1 className="mb-6 font-mono text-6xl font-bold tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-9xl">
                        Lucas Perez Bonato
                    </h1>
                    <p className="mb-8 text-2xl text-muted-foreground text-balance sm:text-3xl md:text-4xl">Backend Developer</p>
                    <div className="mx-auto h-px w-32 bg-primary" />
                </div>
                <div
                    className={`mt-12 max-w-5xl transition-all delay-300 duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <p className="text-center text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
                        I build and <span class="text-primary font-bold">architect</span> backend systems that emphasize <span class="text-primary font-bold">performance</span>, <span class="text-primary font-bold">scalability</span>, and <span class="text-primary font-bold">clean design</span>.<br />
                        Guided by <span class="text-primary font-bold">Domain-Driven Design</span>, I craft maintainable software that connects business logic and technology.<br />
                        While I experiment with <span class="text-primary font-bold">frontend</span>, <span class="text-primary font-bold">mobile</span>, and <span class="text-primary font-bold">game development</span>, my core strength lies in <span class="text-primary font-bold">backend engineering</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}
