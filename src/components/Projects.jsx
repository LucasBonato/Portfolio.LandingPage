import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Search } from "lucide-react"
import { Link } from "react-router"
import { useSectionVisible } from "../hooks/useSectionVisible"
import { useState } from "react";
import projects from "../data/projects"
import TechnologyTag from "./TechnologyTag";

export function Projects() {
    const { sectionRef, isVisible } = useSectionVisible();
    const [ searchTerm, setSearchTerm ] = useState("")
    
    const filteredProjects = projects.filter(
        (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )

    return (
        <section id="projects" ref={sectionRef} className="section-separator min-h-screen px-6 py-20 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <div
                    className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                >
                    <h2 className="mb-12 font-mono text-4xl font-bold sm:text-5xl">
                        <span className="text-primary">//</span> Projects
                    </h2>

                    <div className="mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Buscar projetos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full rounded-lg border border-border bg-card px-12 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>

                    {filteredProjects.length === 0 ? (
                        <div className="py-20 text-center">
                            <p className="text-xl text-muted-foreground">Nenhum projeto localizado</p>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2">
                            {filteredProjects.map((project, index) => (
                                <Link key={project.id} to={`/project/${project.id}`}>
                                    <Card
                                        className={`group overflow-hidden border-border bg-card transition-all duration-1000 hover:border-primary ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                            }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-60" />
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </CardTitle>
                                            <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {project.tags.map((tag) => <TechnologyTag name={tag}/>)}
                                            </div>
                                            <div className="flex gap-4">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    Code
                                                </a>
                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Demo
                                                    </a>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}