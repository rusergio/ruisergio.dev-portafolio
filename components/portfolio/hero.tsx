"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { TypingText } from "@/components/ui/typing-text"
import { ShimmerText } from "@/components/ui/shimmer-text"
import { useLanguage } from "@/components/language-context"

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Email", href: "mailto:joao@exemplo.com", icon: Mail },
  { name: "WhatsApp", href: "https://wa.me/351964557166", icon: WhatsAppIcon },
]

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-20 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-300/40 via-emerald-200/10 to-transparent dark:from-emerald-400/20 dark:via-emerald-500/10" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-400/15 animate-[hero-drift_18s_ease-in-out_infinite]" />
        <div className="absolute top-24 right-10 h-[22rem] w-[22rem] rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-300/10 animate-[hero-drift_24s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="space-y-6 drop-shadow-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.06)] dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm">{t.hero.greeting}</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
                <TypingText text={t.hero.name} speed={100} />
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground">
                <ShimmerText text={`${t.hero.title} ${t.hero.subtitle}`} />
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg text-pretty">
              {t.hero.description}
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-medium tracking-wide text-zinc-100 bg-gradient-to-b from-zinc-700 to-zinc-800 border border-zinc-600/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.45),0_3px_0_rgba(24,24,27,1),0_10px_18px_-12px_rgba(0,0,0,0.9)] hover:from-zinc-600 hover:to-zinc-700 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.4),0_4px_0_rgba(24,24,27,1),0_12px_22px_-12px_rgba(0,0,0,0.95)] active:translate-y-0.5 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.5),0_1px_0_rgba(24,24,27,1),0_6px_12px_-10px_rgba(0,0,0,0.85)] transition-all"
              >
                {t.hero.contact}
              </Link>
              <Link
                href="/cv-rui-sergio-mane.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-medium tracking-wide text-emerald-50 bg-gradient-to-b from-emerald-600 to-emerald-700 border border-emerald-400/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,64,42,0.65),0_3px_0_rgba(6,78,59,1),0_10px_18px_-12px_rgba(0,24,15,0.9)] hover:from-emerald-500 hover:to-emerald-600 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(0,64,42,0.55),0_4px_0_rgba(6,78,59,1),0_12px_22px_-12px_rgba(0,24,15,0.95)] active:translate-y-0.5 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,64,42,0.7),0_1px_0_rgba(6,78,59,1),0_6px_12px_-10px_rgba(0,24,15,0.85)] transition-all"
              >
                {t.hero.viewCV}
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={22} />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column — ilustração undraw (web design showcase) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden w-full lg:flex lg:justify-end"
          >
            <div
              className="relative w-full max-w-[min(100%,28rem)] drop-shadow-xl dark:opacity-[0.95]"
              aria-hidden
            >
              <Image
                src="/images/hero-showcase.svg"
                alt=""
                width={637}
                height={800}
                className="h-auto w-full select-none object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
