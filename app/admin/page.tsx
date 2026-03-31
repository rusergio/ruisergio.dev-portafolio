import { AdminDashboard } from "@/components/admin/dashboard"

const FALLBACK_PROJECTS = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de e-commerce com gestão de inventário, carrinho de compras, pagamentos integrados e painel administrativo.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Docker"],
    github_url: "https://github.com",
    demo_url: "https://example.com",
    image_url: null,
    featured: true,
    display_order: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Aplicação de gestão de tarefas com colaboração em tempo real e quadros Kanban.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
    github_url: "https://github.com",
    demo_url: "https://example.com",
    image_url: null,
    featured: true,
    display_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "Ferramenta de geração de conteúdo alimentada por IA.",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "Tailwind"],
    github_url: "https://github.com",
    demo_url: "https://example.com",
    image_url: null,
    featured: true,
    display_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "CLI DevTools",
    description: "Ferramentas CLI para automatizar tarefas de desenvolvimento.",
    technologies: ["Go", "Cobra"],
    github_url: "https://github.com",
    demo_url: null,
    image_url: null,
    featured: false,
    display_order: 3,
    created_at: new Date().toISOString(),
  },
]

export default function AdminPage() {
  return (
    <AdminDashboard
      projects={FALLBACK_PROJECTS}
      userEmail="admin@exemplo.com"
    />
  )
}
