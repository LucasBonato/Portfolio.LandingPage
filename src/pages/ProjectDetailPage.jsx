import { useParams, useNavigate } from "react-router"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import projects from "../data/projects"

export function ProjectDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const project = projects.find((project) => project.id === id)

    if (!project) {
        return (
            <div className="flex min-h-screen items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold text-foreground">Projeto not found</h1>
                    <button onClick={() => navigate("/")} className="flex items-center gap-2 text-primary hover:underline">
                        <ArrowLeft className="h-4 w-4" />
                        Go to Home
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen px-6 py-20 lg:px-12">
            <div className="mx-auto max-w-4xl">
                <button
                    onClick={() => navigate("/")}
                    className="mb-8 flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                    <ArrowLeft className="h-5 w-5" />
                    Go back
                </button>

                <div className="space-y-8">
                    <div>
                        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">{project.title}</h1>
                        <p className="text-xl text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="overflow-hidden rounded-lg border border-border">
                        <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-96 w-full object-cover" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="rounded-md bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">Project Details</h2>
                        <p className="leading-relaxed text-muted-foreground">{project.fullDescription || project.description}</p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                            <Github className="h-5 w-5" />
                            See on GitHub
                        </a>
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10"
                            >
                                <ExternalLink className="h-5 w-5" />
                                Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
