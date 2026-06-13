/**
 * Theme system types.
 *
 * Each anime theme is a single, self-contained data object describing
 * everything that visually distinguishes it: copy, the backdrop image, the
 * Pomodoro traveler, and its browser branding (tab title + favicon). The color
 * palette — including the drifting petals' color — lives in CSS, keyed by the
 * `data-theme` attribute the {@link ThemeProvider} sets on `<html>`, so adding
 * a theme means adding one object here plus one token block in `index.css`.
 */

/** Stable identifier used for persistence and the `data-theme` attribute. */
export type ThemeId = 'mount-hua' | 'frieren'

export interface TimerConfig {
  /**
   * Traveler icons in journey order (start → finish). The marker swaps to the
   * next icon as it passes each 1/N milestone. May be empty, in which case the
   * timer shows only the {@link TimerConfig.marker} sliding along the bar.
   */
  icons: string[]
  /** Small marker that always rides the progress bar (e.g. a flower/sigil). */
  marker: string
}

export interface Theme {
  id: ThemeId
  /** Human-readable name shown in the theme switcher. */
  name: string
  /** Big gradient heading at the top of the app. */
  title: string
  /** One-line flavor text under the heading. */
  subtitle: string
  /** Shown when the list is empty. */
  emptyMessage: string
  /** Faint full-bleed backdrop image URL (served from `public/`). */
  backdrop: string
  /** Pomodoro traveler configuration. */
  timer: TimerConfig
  /** Browser tab title. */
  documentTitle: string
  /** Favicon URL (served from `public/`). */
  favicon: string
}
