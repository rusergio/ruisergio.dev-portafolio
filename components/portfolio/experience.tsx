"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"

const experiences = [
  {
    period: "2023 — Presente",
    title: "Senior Software Engineer",
    company: "TechCorp",
    companyUrl: "https://example.com",
    description:
      "Lidero o desenvolvimento de microserviços críticos que processam milhões de transações diárias. Implemento arquiteturas escaláveis e mentoro desenvolvedores juniores na equipa.",
    technologies: ["TypeScript", "Node.js", "AWS", "Kubernetes", "PostgreSQL"],
  },
  {
    period: "2021 — 2023",
    title: "Software Engineer",
    company: "StartupX",
    companyUrl: "https://example.com",
    description:
      "Desenvolvi a plataforma principal da empresa desde o início, contribuindo para o crescimento de 0 a 50k utilizadores. Implementei o sistema de autenticação e APIs REST.",
    technologies: ["React", "Next.js", "Python", "FastAPI", "MongoDB"],
  },
  {
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    description:
      "Criei interfaces responsivas e acessíveis para diversos clientes. Estabeleci padrões de código e componentes reutilizáveis que aceleraram o desenvolvimento.",
    technologies: ["JavaScript", "React", "Vue.js", "SCSS", "Figma"],
  },
  {
    period: "2018 — 2019",
    title: "Junior Developer",
    company: "WebSolutions",
    companyUrl: "https://example.com",
    description:
      "Iniciei a minha carreira profissional desenvolvendo websites e aplicações web. Aprendi metodologias ágeis e boas práticas de desenvolvimento.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
]

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground">{t.experience.title}</h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid md:grid-cols-[200px_1fr] gap-4 p-6 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">
                  {exp.title} ·{" "}
                  <Link
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {exp.company}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
