"use client"

import type { ReactElement, SVGProps } from "react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SvgComponent = (props: SVGProps<SVGSVGElement>) => ReactElement

type SkillTileProps = {
  label: string
  Icon?: SvgComponent
  Dark?: SvgComponent
  Light?: SvgComponent
  /** Hide caption under icon (icon-only mode) */
  hideLabel?: boolean
  className?: string
}

export function SkillSvglTile({ label, Icon, Dark, Light, hideLabel, className }: SkillTileProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!Icon && (!Dark || !Light)) {
    return null
  }

  let Comp: SvgComponent
  if (Dark && Light) {
    Comp = mounted && resolvedTheme === "dark" ? Dark : Light
  } else {
    Comp = Icon!
  }

  return (
    <motion.div
      initial={false}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("h-full", className)}
    >
      <div
        className={cn(
          "group relative flex h-full min-h-[5.5rem] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card/90 to-card/40 p-3 shadow-sm",
          "transition-all duration-300 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/[0.07]",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-primary/[0.04] before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100"
        )}
        title={label}
      >
        <div
          className={cn(
            "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background/90 shadow-inner ring-1 ring-border/60",
            "transition-[box-shadow,transform] duration-300 group-hover:ring-primary/25 group-hover:shadow-md"
          )}
        >
          <div className="flex h-9 w-9 items-center justify-center [&_svg]:h-full [&_svg]:w-full [&_svg]:max-h-9 [&_svg]:max-w-9">
            <Comp className="shrink-0 drop-shadow-sm" aria-hidden />
          </div>
        </div>
        {!hideLabel && (
          <span className="line-clamp-2 w-full text-center text-[10px] font-medium uppercase leading-tight tracking-wide text-muted-foreground transition-colors group-hover:text-foreground sm:text-[11px]">
            {label}
          </span>
        )}
        <span className="sr-only">{label}</span>
      </div>
    </motion.div>
  )
}
