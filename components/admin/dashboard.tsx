"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Plus, LogOut, FolderKanban } from "lucide-react"
import { ProjectList } from "./project-list"
import { ProjectForm } from "./project-form"

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  github_url: string | null
  demo_url: string | null
  image_url: string | null
  featured: boolean
  display_order: number
  created_at?: string
}

interface AdminDashboardProps {
  projects: Project[]
  userEmail: string
}

export function AdminDashboard({ projects: initialProjects, userEmail }: AdminDashboardProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  const handleAddProject = () => {
    setEditingProject(null)
    setShowForm(true)
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    setShowForm(true)
  }

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const handleSaveProject = (project: Partial<Project>) => {
    const techArray = project.technologies ?? []

    if (editingProject) {
      setProjects(
        projects.map((p) =>
          p.id === editingProject.id
            ? { ...p, ...project, technologies: techArray }
            : p
        )
      )
    } else {
      const newProject: Project = {
        id: crypto.randomUUID(),
        title: project.title ?? "",
        description: project.description ?? "",
        technologies: techArray,
        github_url: project.github_url ?? null,
        demo_url: project.demo_url ?? null,
        image_url: project.image_url ?? null,
        featured: project.featured ?? false,
        display_order: projects.length,
        created_at: new Date().toISOString(),
      }
      setProjects([...projects, newProject])
    }

    setShowForm(false)
    setEditingProject(null)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingProject(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FolderKanban className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">Painel de Administração</h1>
              <p className="text-xs text-muted-foreground">{userEmail}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-foreground">Projetos</h2>
            <p className="text-sm text-muted-foreground">
              {projects.length} projeto{projects.length !== 1 ? "s" : ""} no portfólio
            </p>
          </div>
          <Button onClick={handleAddProject}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Projeto
          </Button>
        </div>

        {showForm ? (
          <ProjectForm
            project={editingProject}
            onSave={handleSaveProject}
            onCancel={handleCloseForm}
          />
        ) : (
          <ProjectList
            projects={projects}
            onEdit={handleEditProject}
            onDelete={handleDeleteProject}
          />
        )}
      </main>
    </div>
  )
}
