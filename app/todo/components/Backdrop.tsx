import { useTheme } from '../themes/context'
import './Backdrop.css'

/**
 * A faint, full-bleed backdrop image fixed behind all content. The image URL
 * comes from the active theme (`theme.backdrop`, served from `public/`), so it
 * swaps automatically when the theme changes. A top fade-out and low opacity
 * keep it subtle behind the UI; dark mode lets the image read a touch stronger.
 * If a theme provides no backdrop the layer simply renders nothing — no broken
 * image, no build failure.
 */
export function Backdrop() {
  const { theme } = useTheme()
  return (
    <div
      className="backdrop"
      aria-hidden="true"
      data-testid="backdrop"
      style={
        theme.backdrop
          ? { backgroundImage: `url('${theme.backdrop}')` }
          : undefined
      }
    />
  )
}
