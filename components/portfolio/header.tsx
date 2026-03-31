"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const navIds = [
  { key: "about" as const, href: "#sobre" },
  { key: "skills" as const, href: "#skills" },
  { key: "experience" as const, href: "#experiencia" },
  { key: "projects" as const, href: "#projetos" },
  { key: "contact" as const, href: "#contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()
  const { t, language, toggleLanguage } = useLanguage()
  const isDark = theme === "dark"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ["sobre", "skills", "experiencia", "projetos", "contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border"
            : "bg-background/80 backdrop-blur-md border-b border-border/50"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {"RuiSergio.dev"}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navIds.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.nav[item.key]}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label={isDark ? "Usar tema claro" : "Usar tema escuro"}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                type="button"
                onClick={toggleLanguage}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors flex items-center gap-2"
                aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 md:hidden"
          >
            <div className="mx-auto max-w-6xl px-6">
              <div className="flex flex-col gap-6">
                {navIds.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-2xl font-medium py-2 border-b border-border ${
                        activeSection === item.href
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {t.nav[item.key]}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 pt-4 border-t border-border"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setTheme(isDark ? "light" : "dark")
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={isDark ? "Usar tema claro" : "Usar tema escuro"}
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    {isDark ? "Tema claro" : "Tema escuro"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      toggleLanguage()
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
                  >
                    <Globe size={20} />
                    <span className="text-sm font-medium">{language === "pt" ? "Português" : "English"}</span>
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:opacity-90 rounded-full h-12"
                  >
                    <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                      {t.nav.hireMe}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
