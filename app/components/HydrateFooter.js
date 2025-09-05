"use client"
import { useEffect } from "react"

export default function HydrateFooter() {
  useEffect(() => {
    if (typeof document === "undefined") return
    // Remove the initial 'no-flash-footer' and add 'app-ready' so CSS reveals the footer.
    document.body.classList.remove("no-flash-footer")
    document.body.classList.add("app-ready")
  }, [])

  return null
}
