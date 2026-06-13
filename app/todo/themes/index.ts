import type { Theme, ThemeId } from './types'

export type { Theme, ThemeId, TimerConfig } from './types'

/**
 * "Climbing Mount Hua" — the original plum-blossom theme, inspired by
 * *Return of the Blossoming Blade*. Rose-magenta palette, drifting plum petals,
 * and a party of sect members climbing the Pomodoro bar toward the summit.
 */
const mountHua: Theme = {
  id: 'mount-hua',
  name: 'Mount Hua',
  title: 'Climbing Mount Hua',
  subtitle: 'Get to work, you little shi-.',
  emptyMessage: 'Nothing here yet — add your first task above.',
  backdrop: '/backdrop.jpg',
  timer: {
    icons: [
      '/timer/1.webp',
      '/timer/2.webp',
      '/timer/3.webp',
      '/timer/4.webp',
      '/timer/5.webp',
    ],
    marker: '/Mount_Hua_Sect_Symbol.webp',
  },
  documentTitle: 'Climbing Mount Hua — A Modern Todo List',
  favicon: '/Mount_Hua_Sect_Symbol.webp',
}

/**
 * "Frieren's Journey" — inspired by *Frieren: Beyond Journey's End*. A warm
 * golden-dawn sky over cool cornflower-blue Blue-Moon Weed (Himmel's favorite
 * flower); its blue petals drift from the cursor in place of plum blossoms.
 *
 * Character traveler icons are left as slots — drop transparent images into
 * `public/frieren/timer/` and list them in `timer.icons` to light up the
 * member-by-member journey, exactly like Mount Hua. The flower SVG serves as
 * the favicon and the Pomodoro marker.
 */
const frieren: Theme = {
  id: 'frieren',
  name: 'Frieren',
  title: "Frieren's Journey",
  subtitle: 'Collect tasks like spells — one at a time.',
  emptyMessage: 'No spells to collect yet — add your first task above.',
  backdrop: '/frieren.jpg',
  timer: {
    // No character art yet — the flower marker travels alone for now. Add
    // '/frieren/timer/1.webp', … here to enable the member-swap journey.
    icons: [],
    marker: '/frieren-flower.svg',
  },
  documentTitle: "Frieren's Journey — A Modern Todo List",
  favicon: '/frieren-flower.svg',
}

/** All themes, in switcher order. */
export const THEMES: readonly Theme[] = [mountHua, frieren]

/** The theme used before the user has chosen one (and the CSS `:root` default). */
export const DEFAULT_THEME_ID: ThemeId = 'mount-hua'

const THEME_BY_ID: Record<ThemeId, Theme> = {
  'mount-hua': mountHua,
  frieren,
}

/** Resolve a theme by id, falling back to the default for unknown ids. */
export function getTheme(id: string | null | undefined): Theme {
  if (id && id in THEME_BY_ID) return THEME_BY_ID[id as ThemeId]
  return THEME_BY_ID[DEFAULT_THEME_ID]
}

export const DEFAULT_THEME: Theme = THEME_BY_ID[DEFAULT_THEME_ID]
