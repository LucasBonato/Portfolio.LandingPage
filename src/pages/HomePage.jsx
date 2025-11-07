import { useEffect, useState } from "react"
import { Hero } from "../components/Hero"
import { Skills } from "../components/Skills"
import { Experience } from "../components/Experience"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"
import { ScrollNav } from "../components/ScrollNav"

const sections = ["hero", "skills", "experience", "projects", "contact"]
export function HomePage() {
    const [activeSection, setActiveSection] = useState(sections[0])

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <ScrollNav activeSection={activeSection} />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </>
    )
}
