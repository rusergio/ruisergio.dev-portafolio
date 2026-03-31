"use client"

import { motion } from "framer-motion"
import { Code2, Rocket, Users, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-context"

const highlightKeys = [
  { icon: Code2, titleKey: "highlight1Title" as const, descKey: "highlight1Desc" as const },
  { icon: Rocket, titleKey: "highlight2Title" as const, descKey: "highlight2Desc" as const },
  { icon: Users, titleKey: "highlight3Title" as const, descKey: "highlight3Desc" as const },
  { icon: Zap, titleKey: "highlight4Title" as const, descKey: "highlight4Desc" as const },
]

const categoryKeys = ["frontend", "backend", "database", "devops"] as const

const skillsByCategory = {
  frontend: [
    "JavaScript / TypeScript",
    "React / Next.js",
  ],
  backend: [
    "Node.js",
    "Python",
    "GraphQL / REST APIs",
  ],
  database: [
    "PostgreSQL / MongoDB",
  ],
  devops: [
    "AWS / Docker",
    "Git / CI/CD",
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent" />
      
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
              {t.about.tag}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.about.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {" "}{t.about.titleHighlight}
              </span>
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p className="text-pretty">{t.about.bio1}</p>
                <p className="text-pretty">{t.about.bio2}</p>
                <p className="text-pretty">{t.about.bio3}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                {[
                  { value: "5+", label: t.about.stat1 },
                  { value: "50+", label: t.about.stat2 },
                  { value: "20+", label: t.about.stat3 },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {highlightKeys.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t.about[item.titleKey]}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.about[item.descKey]}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <p className="text-sm text-muted-foreground mb-6 text-center">
              {t.about.technologiesTitle}
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {categoryKeys.map((catKey) => (
                <motion.div key={catKey} variants={itemVariants}>
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    {t.skills[catKey]}
                  </h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {skillsByCategory[catKey].map((skill) => (
                      <motion.li
                        key={skill}
                        variants={itemVariants}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary">▹</span>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
