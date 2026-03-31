"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Facebook, Instagram } from "lucide-react"
import { Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success(t.contact.successMessage)
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contacto" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

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
              {t.contact.tag}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.contact.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {" "}{t.contact.titleHighlight}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {t.contact.infoTitle}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.contact.infoDesc}
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-6">
                {[
                  { icon: Mail, label: t.contact.email, value: "rui.mane@example.com", href: "mailto:rui.mane@example.com" },
                  { icon: MapPin, label: t.contact.location, value: t.contact.locationValue, href: null },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">{t.contact.followMe}</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      {t.contact.nameLabel}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t.contact.namePlaceholder}
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      {t.contact.emailLabel}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t.contact.emailPlaceholder}
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    {t.contact.messageLabel}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t.contact.messagePlaceholder}
                    required
                    rows={6}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground h-12 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {t.contact.sending}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {t.contact.sendMessage}
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
