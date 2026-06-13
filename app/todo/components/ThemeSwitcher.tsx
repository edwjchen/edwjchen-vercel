import type { ThemeId } from '../themes'
import { useTheme } from '../themes/context'

/**
 * Compact theme picker shown in the header. A native <select> keeps it fully
 * keyboard- and screen-reader-accessible; the choice persists via the provider.
 */
export function ThemeSwitcher() {
  const { themes, themeId, setThemeId } = useTheme()

  return (
    <label className="theme-switcher">
      <select
        className="theme-switcher__select"
        aria-label="Theme"
        value={themeId}
        onChange={(event) => setThemeId(event.target.value as ThemeId)}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </label>
  )
}
