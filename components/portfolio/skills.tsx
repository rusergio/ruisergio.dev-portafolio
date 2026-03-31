"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"

const skillCategoryKeys = ["frontend", "backend", "database", "devops"] as const

const skillCategories = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  backend: ["Node.js", "Python", "Java", "PHP", "REST APIs", "GraphQL"],
  database: ["PostgreSQL", "MongoDB", "SQLite", "MySQL", "Firebase", "Prisma"],
  devops: ["Docker", "AWS/Azure", "GitHub/GitLab", "CI/CD", "Kubernetes", "Linux"],
}

export function Skills() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block"
            >
              {t.skills.tag}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.skills.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {" "}{t.skills.titleHighlight}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.skills.description}
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategoryKeys.map((catKey, categoryIndex) => (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-card border border-border backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
                  {t.skills[catKey]}
                </h3>
                <div className="space-y-3">
                  {skillCategories[catKey].map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-150 transition-transform duration-300" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional tools marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <p className="text-center text-muted-foreground text-sm mb-8">
              {t.skills.alsoExperienced}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Jest",
                "Webpack",
                "Vite",
                "Figma",
                "Jira",
                "Agile",
                "TDD",
                "Microservices",
              ].map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-sm hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
