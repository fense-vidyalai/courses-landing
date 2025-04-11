"use client"

import { useEffect } from "react"

export function BrowserCompatibility() {
  useEffect(() => {
    // Simple browser detection
    const userAgent = window.navigator.userAgent
    let browserClass = ""

    if (userAgent.indexOf("Chrome") > -1) {
      browserClass = "browser-chrome"
    } else if (userAgent.indexOf("Safari") > -1) {
      browserClass = "browser-safari"
    } else if (userAgent.indexOf("Firefox") > -1) {
      browserClass = "browser-firefox"
    } else if (userAgent.indexOf("Edge") > -1) {
      browserClass = "browser-edge"
    }

    // Add browser-specific class to body
    if (browserClass) {
      document.body.classList.add(browserClass)
    }

    return () => {
      if (browserClass) {
        document.body.classList.remove(browserClass)
      }
    }
  }, [])

  return null
}
