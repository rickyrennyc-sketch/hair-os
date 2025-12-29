"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function VisionPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  return (
    <div style={{ padding: 24 }}>
      <h1>Try Your Look</h1>

      <input type="file" accept="image/*" />

      <br /><br />

      <button
        onClick={() => {
          setLoading(true)
          setTimeout(() => {
            router.push("/vision/results")
          }, 2000)
        }}
      >
        Generate My Look
      </button>

      {loading && <p>Analyzing your look…</p>}
    </div>
  )
}