import { createContext, useContext } from 'react'
import type { Theme, ThemeId } from './types'
import { DEFAULT_THEME, DEFAULT_THEME_ID, THEMES } from './index'

export interface ThemeContextValue {
  /** The fully-resolved active theme. */
  theme: Theme
  /** The active theme's id. */
  themeId: ThemeId
  /** Switch to another theme (persisted across reloads). */
  setThemeId: (id: ThemeId) => void
  /** All available themes, in switcher order. */
  themes: readonly Theme[]
}

/**
 * Default value so components used outside a provider (e.g. in isolated unit
 * tests) still resolve to the default theme rather than crashing. `setThemeId`
 * is a no-op in that case. The live value is supplied by {@link ThemeProvider}.
 */
export const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  themeId: DEFAULT_THEME_ID,
  setThemeId: () => {},
  themes: THEMES,
})

/** Read the active theme and switcher controls. */
export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext)
}
