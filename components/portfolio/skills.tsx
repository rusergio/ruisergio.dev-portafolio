"use client"

import type { ReactElement, SVGProps } from "react"
import { motion } from "framer-motion"
import { Cloud, Code2, Database, Server } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { SkillSvglTile } from "@/components/portfolio/skill-svgl-tile"
import {
  AmazonWebServicesDark,
  AmazonWebServicesLight,
  CSS,
  CursorDark,
  CursorLight,
  Docker,
  Expo,
  ExpressjsDark,
  ExpressjsLight,
  Figma,
  Firebase,
  Git,
  GitHubDark,
  GitHubLight,
  GitLab,
  GraphQL,
  Java,
  JavaScript,
  Jest,
  Kubernetes,
  Laravel,
  Linear,
  Linux,
  MongoDBDark,
  MongoDBLight,
  MySQLDark,
  MySQLLight,
  Nextjs,
  Nodejs,
  PostgreSQL,
  Postman,
  PhpDark,
  PhpLight,
  PrismaDark,
  PrismaLight,
  ReactDark,
  ReactLight,
  Spring,
  SQLite,
  Supabase,
  Swagger,
  TailwindCSS,
  TypeScript,
  VercelDark,
  VercelLight,
  Vite,
  Vue,
} from "@ridemountainpig/svgl-react"

const skillCategoryKeys = ["frontend", "backend", "database", "devops"] as const

const categoryMeta = {
  frontend: { icon: Code2, accent: "from-violet-500/15 to-fuchsia-500/10" },
  backend: { icon: Server, accent: "from-emerald-500/15 to-teal-500/10" },
  database: { icon: Database, accent: "from-sky-500/15 to-blue-500/10" },
  devops: { icon: Cloud, accent: "from-amber-500/15 to-orange-500/10" },
} as const

type SvgComp = (props: SVGProps<SVGSVGElement>) => ReactElement

type SkillItem =
  | { label: string; Icon: SvgComp }
  | { label: string; Dark: SvgComp; Light: SvgComp }

const skillCategories: Record<(typeof skillCategoryKeys)[number], SkillItem[]> = {
  frontend: [
    { label: "JavaScript", Icon: JavaScript },
    { label: "TypeScript", Icon: TypeScript },
    { label: "React", Dark: ReactDark, Light: ReactLight },
    { label: "Next.js", Icon: Nextjs },
    { label: "Vue.js", Icon: Vue },
    { label: "CSS", Icon: CSS },
    { label: "Tailwind CSS", Icon: TailwindCSS },
    { label: "Expo", Icon: Expo },
  ],
  backend: [
    { label: "Node.js", Icon: Nodejs },
    { label: "Express", Dark: ExpressjsDark, Light: ExpressjsLight },
    { label: "Laravel", Icon: Laravel },
    { label: "PHP", Dark: PhpDark, Light: PhpLight },
    { label: "Spring Boot", Icon: Spring },
    { label: "Java", Icon: Java },
    { label: "GraphQL", Icon: GraphQL },
    { label: "OpenAPI / REST", Icon: Swagger },
  ],
  database: [
    { label: "PostgreSQL", Icon: PostgreSQL },
    { label: "MySQL", Dark: MySQLDark, Light: MySQLLight },
    { label: "Firebase", Icon: Firebase },
    { label: "Supabase", Icon: Supabase },
    { label: "SQLite", Icon: SQLite },
    { label: "MongoDB", Dark: MongoDBDark, Light: MongoDBLight },
    { label: "Prisma", Dark: PrismaDark, Light: PrismaLight },
  ],
  devops: [
    { label: "Docker", Icon: Docker },
    { label: "Git", Icon: Git },
    { label: "GitHub", Dark: GitHubDark, Light: GitHubLight },
    { label: "GitLab CI/CD", Icon: GitLab },
    { label: "Kubernetes", Icon: Kubernetes },
    { label: "AWS", Dark: AmazonWebServicesDark, Light: AmazonWebServicesLight },
    { label: "Linux", Icon: Linux },
    { label: "Vercel", Dark: VercelDark, Light: VercelLight },
  ],
}

const alsoExperienced: SkillItem[] = [
  { label: "Jest", Icon: Jest },
  { label: "Vite", Icon: Vite },
  { label: "Figma", Icon: Figma },
  { label: "Linear", Icon: Linear },
  { label: "Postman", Icon: Postman },
  { label: "Cursor", Dark: CursorDark, Light: CursorLight },
]

export function Skills() {
  const { t, language } = useLanguage()
  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32 px-6">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[min(70vh,520px)] w-[min(90vw,640px)] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/12 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-14 text-center md:mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary"
            >
              {t.skills.tag}
            </motion.span>
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {t.skills.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {" "}
                {t.skills.titleHighlight}
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t.skills.description}
            </p>
          </div>

          {/* Category cards */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
            {skillCategoryKeys.map((catKey, categoryIndex) => {
              const meta = categoryMeta[catKey]
              const Icon = meta.icon
              const items = skillCategories[catKey]
              return (
                <motion.div
                  key={catKey}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: categoryIndex * 0.08, duration: 0.55 }}
                  className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/40 p-5 shadow-sm backdrop-blur-md md:p-6"
                >
                  <div
                    className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${meta.accent} blur-2xl`}
                  />
                  <div className="relative mb-5 flex items-start gap-3 border-b border-border/60 pb-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="text-base font-semibold leading-tight tracking-tight text-foreground">
                        {t.skills[catKey]}
                      </h3>
                      <p className="mt-1 text-xs font-medium tabular-nums text-muted-foreground">
                        {items.length}{" "}
                        {language === "pt"
                          ? items.length === 1
                            ? "tecnologia"
                            : "tecnologias"
                          : items.length === 1
                            ? "technology"
                            : "technologies"}
                      </p>
                    </div>
                  </div>
                  <div className="relative grid grid-cols-2 gap-2.5 sm:grid-cols-2">
                    {items.map((skill, i) => (
                      <motion.div
                        key={skill.label}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{
                          delay: categoryIndex * 0.06 + i * 0.03,
                          duration: 0.35,
                        }}
                      >
                        <SkillSvglTile
                          label={skill.label}
                          {...("Icon" in skill
                            ? { Icon: skill.Icon }
                            : { Dark: skill.Dark, Light: skill.Light })}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Also experienced */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-14 md:mt-16"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-muted/30 to-muted/10 px-5 py-8 shadow-inner backdrop-blur-sm md:px-10 md:py-10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
              <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {t.skills.alsoExperienced}
              </p>
              <div className="flex flex-wrap items-stretch justify-center gap-3">
                {alsoExperienced.map((item) => (
                  <div key={item.label} className="w-[calc(50%-0.375rem)] max-w-[9rem] sm:w-36 sm:max-w-none">
                    <SkillSvglTile
                      label={item.label}
                      {...("Icon" in item
                        ? { Icon: item.Icon }
                        : { Dark: item.Dark, Light: item.Light })}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
