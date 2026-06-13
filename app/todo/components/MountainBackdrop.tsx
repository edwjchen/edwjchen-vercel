import './MountainBackdrop.css'

/**
 * A faint, full-bleed backdrop image fixed behind all content. The image lives
 * at `public/backdrop.jpg` (see public/BACKDROP.md) and is referenced by URL,
 * so if it's ever absent the CSS background simply renders nothing — no broken
 * image, no build failure. A top fade-out and low opacity keep it subtle behind
 * the UI; dark mode lets the same image read a touch stronger.
 */
export function MountainBackdrop() {
  return (
    <div className="mountain-backdrop" aria-hidden="true" data-testid="mountain-backdrop" />
  )
}
