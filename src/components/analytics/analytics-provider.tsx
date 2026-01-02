'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV === 'production') {
      // Umami Analytics
      if (typeof window !== 'undefined' && window.umami) {
        window.umami.track(pathname)
      }

      // Plausible Analytics
      if (typeof window !== 'undefined' && window.plausible) {
        window.plausible('pageview', {
          u: pathname + searchParams?.toString()
        })
      }
    }
  }, [pathname, searchParams])

  return <>{children}</>
}

// Type declarations for analytics
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void
    }
    plausible?: (
      eventName: string,
      options?: {
        u?: string
        props?: Record<string, any>
      }
    ) => void
  }
}
