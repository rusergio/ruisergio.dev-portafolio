"use client"

import { Github, Gitlab, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-context"

// Bitbucket Icon Component
function BitbucketIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.212.889.4 1.154.225.31.577.496 1.003.496h13.708a.768.768 0 00.768-.895l-3.27-20.01a.768.768 0 00-.768-.641H.778zm14.52 14.498L15.72 17.5H8.28l-1.2-1.789h10.218zm-1.97-2.94l-1.5-2.25H8.97l-1.5 2.25H5.592l4.5-6.75h5.816l4.5 6.75h-1.878z" />
    </svg>
  )
}

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
