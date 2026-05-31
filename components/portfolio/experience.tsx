"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"

function hasExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url)
}

export function Experience() {
  const { t } = useLanguage()
  const experiences = t.experience.items

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
              <div className="text-sm text-muted-foreground font-mono">{exp.period}</div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">
                  {exp.title}
                  {" · "}
                  {hasExternalUrl(exp.companyUrl) ? (
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <span className="text-primary font-medium">{exp.company}</span>
                  )}
                </h3>
                {exp.context ? (
                  <p className="text-sm font-medium text-primary">{exp.context}</p>
                ) : null}
                {exp.launchNote ? (
                  <p className="text-xs text-muted-foreground italic">{exp.launchNote}</p>
                ) : null}
                <p className="text-muted-foreground leading-relaxed text-pretty whitespace-pre-line">
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
