"use client"

import { Github, Gitlab, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-context"

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Gitlab, href: "#", label: "GitLab" },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-xl font-bold text-foreground">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {"RuiSergio.dev"}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            {t.footer.builtWith} <Heart className="w-4 h-4 text-destructive fill-destructive" /> ©{" "}
            {new Date().getFullYear()}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
