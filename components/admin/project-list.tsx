"use client"

import { Button } from "@/components/ui/button"
import { Edit, Trash2, ExternalLink, Github, Star } from "lucide-react"
import type { Project } from "./dashboard"

interface ProjectListProps {
  projects: Project[]
  onEdit: (project: Project) => void
  onDelete: (id: string) => void
}

export function ProjectList({ projects, onEdit, onDelete }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 border border-dashed border-border rounded-lg">
        <p className="text-muted-foreground">
          Ainda não tem projetos. Clique em "Novo Projeto" para adicionar.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-foreground truncate">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                    <Star className="w-3 h-3" />
                    Destacado
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-sm">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(project)}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-destructive hover:text-destructive bg-transparent"
                onClick={() => {
                  if (confirm("Tem a certeza que deseja eliminar este projeto?")) {
                    onDelete(project.id)
                  }
                }}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
