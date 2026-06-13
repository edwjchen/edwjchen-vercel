/** Custom event used to trigger a celebratory petal burst from anywhere. */
export const PETAL_BURST_EVENT = 'petal:burst'

export interface PetalBurstDetail {
  x: number
  y: number
}

/** Dispatch a burst of petals centered on the given viewport coordinates. */
export function emitPetalBurst(x: number, y: number): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent<PetalBurstDetail>(PETAL_BURST_EVENT, { detail: { x, y } }),
  )
}
