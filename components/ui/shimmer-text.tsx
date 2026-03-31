"use client"

interface ShimmerTextProps {
  text: string
  className?: string
}

export function ShimmerText({ text, className = "" }: ShimmerTextProps) {
  return (
    <span
      className={`inline-block bg-[linear-gradient(90deg,var(--muted-foreground)_0%,var(--foreground)_25%,var(--primary)_50%,var(--foreground)_75%,var(--muted-foreground)_100%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer ${className}`}
    >
      {text}
    </span>
  )
}
