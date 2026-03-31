"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/admin")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">A redirecionar...</p>
    </div>
  )
}
