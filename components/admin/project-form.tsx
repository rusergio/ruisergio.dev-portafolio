"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { X, Loader2 } from "lucide-react"
import type { Project } from "./dashboard"

interface ProjectFormProps {
  project: Project | null
  onSave: (project: Partial<Project>) => void
  onCancel: () => void
}

export function ProjectForm({ project, onSave, onCancel }: ProjectFormProps) {
  const [title, setTitle] = useState(project?.title ?? "")
  const [description, setDescription] = useState(project?.description ?? "")
  const [technologies, setTechnologies] = useState(
    project?.technologies.join(", ") ?? ""
  )
  const [githubUrl, setGithubUrl] = useState(project?.github_url ?? "")
  const [demoUrl, setDemoUrl] = useState(project?.demo_url ?? "")
  const [imageUrl, setImageUrl] = useState(project?.image_url ?? "")
  const [featured, setFeatured] = useState(project?.featured ?? false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const techArray = technologies
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)

    await onSave({
      title,
      description,
      technologies: techArray,
      github_url: githubUrl || null,
      demo_url: demoUrl || null,
      image_url: imageUrl || null,
      featured,
    })

    setLoading(false)
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          {project ? "Editar Projeto" : "Novo Projeto"}
        </h3>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nome do projeto"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies">Tecnologias *</Label>
            <Input
              id="technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="React, Node.js, PostgreSQL"
              required
            />
            <p className="text-xs text-muted-foreground">Separadas por vírgula</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição *</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descreva o projeto..."
            rows={4}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="github">URL do GitHub</Label>
            <Input
              id="github"
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="demo">URL da Demo</Label>
            <Input
              id="demo"
              type="url"
              value={demoUrl}
              onChange={(e) => setDemoUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">URL da Imagem</Label>
          <Input
            id="image"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </div>

        <div className="flex items-center gap-3">
          <Switch
            id="featured"
            checked={featured}
            onCheckedChange={setFeatured}
          />
          <Label htmlFor="featured" className="cursor-pointer">
            Projeto destacado (aparece em destaque no portfólio)
          </Label>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                A guardar...
              </>
            ) : project ? (
              "Atualizar Projeto"
            ) : (
              "Criar Projeto"
            )}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  )
}
