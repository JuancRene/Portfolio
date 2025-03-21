"use client"

import { useState } from "react"

type ToastVariant = "default" | "destructive"

export type Toast = {
  title?: string
  description?: string
  variant?: ToastVariant
}

export function useToast() {
  const [toast, setToast] = useState<Toast | null>(null)

  const showToast = (newToast: Toast) => {
    setToast(newToast)

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setToast(null)
    }, 5000)
  }

  const dismissToast = () => {
    setToast(null)
  }

  return {
    toast,
    dismissToast,
    showToast,
  }
}

