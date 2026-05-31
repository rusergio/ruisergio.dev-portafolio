"use client"

import { useState } from "react"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-context"

type ProjectId = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

interface ProjectData {
  id: ProjectId
  image: string
  tags: string[]
  category: "fullstack" | "frontend" | "backend" | "mobile"
  github: string
  live: string
}

const projectData: ProjectData[] = [
  {
    id: "1",
    image: "/projects/bebrascuba.png",
    tags: ["React", "Mantine UI", "TypeScript", "Laravel", "PostgreSQL", "Docker"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&auto=format&q=85",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=500&fit=crop&auto=format&q=85",
    tags: ["React", "HeroUI", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&auto=format&q=85",
    tags: ["Java", "Spring Boot", "JWT", "Maven", "PostgreSQL"],
    category: "backend",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "Expo EAS"],
    category: "mobile",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=500&fit=crop&auto=format&q=85",
    tags: ["React Native", "Expo", "TypeScript"],
    category: "mobile",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=500&fit=crop",
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "Expo EAS"],
    category: "mobile",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    tags: ["React Native", "Expo", "TypeScript"],
    category: "mobile",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "9",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop&auto=format&q=85",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "fullstack",
    github: "https://github.com/rusergio/ruisergio.dev-portafolio",
    live: "https://ruisergio.dev",
  },
]

const categoryIds = ["all", "fullstack", "frontend", "backend", "mobile"] as const
type CategoryId = (typeof categoryIds)[number]

export function Projects() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all")

  const filteredProjects =
    activeCategory === "all"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory)

  const categoryLabels: Record<CategoryId, string> = {
    all: t.projects.all,
    fullstack: t.projects.fullstack,
    frontend: t.projects.frontend,
    backend: t.projects.backend,
    mobile: t.projects.mobile,
  }

  return (
    <section id="projetos" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary)/5,transparent_70%)]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              {t.projects.tag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.projects.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {" "}{t.projects.titleHighlight}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.projects.description}
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categoryIds.map((catId) => (
              <Button
                key={catId}
                variant={activeCategory === catId ? "default" : "ghost"}
                onClick={() => setActiveCategory(catId)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  activeCategory === catId
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {categoryLabels[catId]}
              </Button>
            ))}
          </div>

          {/* Grelha normal: só lista `filteredProjects` por categoria — sem animação de layout nos cartões */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-[border-color,box-shadow] duration-300 hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={t.projects[`project${project.id}` as `project${ProjectId}`].title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {t.projects[`project${project.id}` as `project${ProjectId}`].title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                    {t.projects[`project${project.id}` as `project${ProjectId}`].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground border-0 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors duration-300"
                      aria-label="Ver código no GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors duration-300"
                      aria-label="Ver demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {t.projects.viewProject}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
