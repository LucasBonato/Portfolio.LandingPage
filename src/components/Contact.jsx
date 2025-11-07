import { useState } from "react"
import { useSectionVisible } from "../hooks/useSectionVisible"
import SectionTitle from "./SectionTitle";
import info from "../data/info"

export function Contact() {
    const { sectionRef, isVisible } = useSectionVisible();
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        message: "",
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formInfo = `Nome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`
        alert(formInfo)
        setFormData({ name: "", email: "", message: "" })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact" ref={sectionRef} className="section-separator min-h-screen px-6 py-20 lg:px-12">
            <div className="mx-auto max-w-4xl w-full">
                <div
                    className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                >
                    <SectionTitle title="Contact"/>

                    <form onSubmit={handleSubmit} className="mb-12 space-y-6">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                placeholder="Something..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
                            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to get in touch!
                        </p>
                        <div className="flex flex-wrap gap-6">
                            {info.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 transition-all duration-300 hover:border-primary hover:bg-primary/10 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                                    <span className="font-medium text-muted-foreground transition-colors group-hover:text-primary">
                                        {link.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
