"use client"

import { useState, useEffect } from "react"

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  deleteSpeed?: number
  pauseAfterType?: number
  pauseAfterDelete?: number
  cursor?: boolean
  cursorClassName?: string
}

export function TypingText({
  text,
  className = "",
  speed = 80,
  deleteSpeed = 50,
  pauseAfterType = 2000,
  pauseAfterDelete = 500,
  cursor = true,
  cursorClassName = "",
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let index = 0
    let phase: "typing" | "pause1" | "deleting" | "pause2" = "typing"
    let timeoutId: ReturnType<typeof setTimeout>

    const run = () => {
      if (phase === "typing") {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
          timeoutId = setTimeout(run, speed)
        } else {
          phase = "pause1"
          timeoutId = setTimeout(run, pauseAfterType)
        }
      } else if (phase === "pause1") {
        phase = "deleting"
        timeoutId = setTimeout(run, deleteSpeed)
      } else if (phase === "deleting") {
        if (index > 0) {
          index--
          setDisplayText(text.slice(0, index))
          timeoutId = setTimeout(run, deleteSpeed)
        } else {
          phase = "pause2"
          timeoutId = setTimeout(run, pauseAfterDelete)
        }
      } else {
        phase = "typing"
        timeoutId = setTimeout(run, speed)
      }
    }

    run()
    return () => clearTimeout(timeoutId)
  }, [text, speed, deleteSpeed, pauseAfterType, pauseAfterDelete])

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span
          className={`inline-block w-[2px] min-w-[2px] h-[0.85em] ml-0.5 align-middle bg-primary animate-pulse ${cursorClassName}`}
          style={{ animationDuration: "0.8s" }}
          aria-hidden
        />
      )}
    </span>
  )
}
