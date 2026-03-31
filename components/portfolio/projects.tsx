"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-context"

interface ProjectData {
  id: "1" | "2" | "3" | "4" | "5" | "6"
  image: string
  tags: string[]
  category: "fullstack" | "frontend" | "backend" | "mobile"
  github: string
  live: string
}

const projectData: ProjectData[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    category: "frontend",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    tags: ["Go", "Redis", "Docker", "Kubernetes"],
    category: "backend",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    category: "mobile",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block"
            >
              {t.projects.tag}
            </motion.span>
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

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={t.projects[`project${project.id}` as "project1" | "project2" | "project3" | "project4" | "project5" | "project6"].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {t.projects[`project${project.id}` as "project1" | "project2" | "project3" | "project4" | "project5" | "project6"].title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {t.projects[`project${project.id}` as "project1" | "project2" | "project3" | "project4" | "project5" | "project6"].description}
                    </p>

                    {/* Tags */}
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

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-300"
                        aria-label="Ver código no GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-300"
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
