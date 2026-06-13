'use client'

import {
  useCallback,
  useLayoutEffect,
  useMemo,
  type ReactNode,
} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { ThemeId } from './types'
import { DEFAULT_THEME_ID, THEMES, getTheme } from './index'
import { ThemeContext, type ThemeContextValue } from './context'

const STORAGE_KEY = 'todo:theme'

/** MIME type for a favicon path, so the `<link>` type attribute stays honest. */
function faviconType(href: string): string {
  if (href.endsWith('.svg')) return 'image/svg+xml'
  if (href.endsWith('.webp')) return 'image/webp'
  if (href.endsWith('.png')) return 'image/png'
  if (href.endsWith('.ico')) return 'image/x-icon'
  return ''
}

/**
 * Owns the active theme for the /todo route. Persists the choice to
 * localStorage and applies the theme's palette via the `data-theme` attribute
 * that {@link TodoApp} sets on the `.todo-page` wrapper.
 *
 * It also gives each todo theme its own browser branding — tab title + favicon
 * — but ONLY while this route is mounted. The portfolio's site-wide favicon
 * (`app/favicon.ico`) and title are snapshotted on mount and restored on
 * unmount, so navigating back to the rest of the site keeps the site icon while
 * each todo list shows its own (Mount Hua sigil / Frieren's flower).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useLocalStorage<ThemeId>(
    STORAGE_KEY,
    DEFAULT_THEME_ID,
  )

  const theme = useMemo(() => getTheme(themeId), [themeId])

  // Snapshot the site-wide title + favicon once on mount; restore on unmount.
  // Split from the apply effect below so switching themes never briefly flashes
  // the portfolio icon back in.
  useLayoutEffect(() => {
    if (typeof document === 'undefined') return

    let link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]')
    const created = !link
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }

    const prevTitle = document.title
    const prevHref = link.getAttribute('href')
    const prevType = link.getAttribute('type')

    return () => {
      document.title = prevTitle
      if (created) {
        link?.remove()
        return
      }
      if (prevHref !== null) link!.setAttribute('href', prevHref)
      else link!.removeAttribute('href')
      if (prevType !== null) link!.setAttribute('type', prevType)
      else link!.removeAttribute('type')
    }
  }, [])

  // Apply the active theme's tab title + favicon; re-runs on every theme switch.
  useLayoutEffect(() => {
    if (typeof document === 'undefined') return
    document.title = theme.documentTitle

    const link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]')
    if (link) {
      link.href = theme.favicon
      const type = faviconType(theme.favicon)
      if (type) link.type = type
      else link.removeAttribute('type')
    }
  }, [theme])

  const setTheme = useCallback((id: ThemeId) => setThemeId(id), [setThemeId])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, themeId: theme.id, setThemeId: setTheme, themes: THEMES }),
    [theme, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
