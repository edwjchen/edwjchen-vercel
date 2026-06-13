import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { PETAL_BURST_EVENT, type PetalBurstDetail } from './petalBurst'
import './PetalField.css'

interface Petal {
  id: number
  style: CSSProperties
}

/** How often petals are released from a moving cursor (periodic, not per-move). */
const EMIT_INTERVAL_MS = 1300
/** Hard cap on simultaneous petals to keep things smooth. */
const MAX_PETALS = 48

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

/**
 * A purely decorative overlay. As the pointer moves, plum blossom petals are
 * shed at the cursor; completing a task triggers a small celebratory burst
 * (see {@link emitPetalBurst}). Petals drift gracefully to the bottom of the
 * page. The layer ignores pointer events and is hidden from assistive tech, so
 * it never interferes with the todo UI. Honors prefers-reduced-motion.
 */
export function PetalField() {
  const [petals, setPetals] = useState<Petal[]>([])
  const pointerRef = useRef({ x: 0, y: 0 })
  const movedRef = useRef(false)
  const idRef = useRef(0)

  useEffect(() => {
    if (prefersReducedMotion()) return

    /** Build a single petal that falls from (x, y); `spread` widens the drift. */
    const createPetal = (x: number, y: number, spread = 80): Petal => {
      const size = randomBetween(8, 20)
      const drift = randomBetween(-spread, spread)
      // Fall just past the bottom edge, relative to where it was shed.
      const fall = window.innerHeight - y + randomBetween(40, 140)
      const spin = randomBetween(-200, 200)
      const duration = randomBetween(2.6, 4.6)
      const id = idRef.current++

      const style: CSSProperties = {
        left: `${x}px`,
        top: `${y}px`,
        '--petal-size': `${size}px`,
        '--petal-drift': `${drift}px`,
        '--petal-fall': `${fall}px`,
        '--petal-spin': `${spin}deg`,
        '--petal-duration': `${duration}s`,
        '--petal-hue': `${randomBetween(-14, 14)}deg`,
      } as CSSProperties

      return { id, style }
    }

    const addPetals = (incoming: Petal[]) => {
      setPetals((prev) => {
        const next = [...prev, ...incoming]
        // Drop the oldest if we exceed the cap.
        return next.length > MAX_PETALS ? next.slice(next.length - MAX_PETALS) : next
      })
    }

    // Track the cursor cheaply; the interval below decides when to emit.
    const handleMove = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY }
      movedRef.current = true
    }

    // Periodically release a petal or two — but only if the mouse has moved
    // since the last tick, so an idle cursor never rains petals.
    const intervalId = window.setInterval(() => {
      if (!movedRef.current) return
      movedRef.current = false
      const count = Math.random() < 0.3 ? 2 : 1
      const { x, y } = pointerRef.current
      addPetals(Array.from({ length: count }, () => createPetal(x, y)))
    }, EMIT_INTERVAL_MS)

    const handleBurst = (event: Event) => {
      const detail = (event as CustomEvent<PetalBurstDetail>).detail
      if (!detail) return
      const count = Math.round(randomBetween(10, 16))
      addPetals(
        Array.from({ length: count }, () =>
          createPetal(detail.x, detail.y, 140),
        ),
      )
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener(PETAL_BURST_EVENT, handleBurst)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener(PETAL_BURST_EVENT, handleBurst)
      window.clearInterval(intervalId)
    }
  }, [])

  const removePetal = (id: number) => {
    setPetals((prev) => prev.filter((petal) => petal.id !== id))
  }

  return (
    <div className="petal-field" aria-hidden="true" data-testid="petal-field">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={petal.style}
          // Both the descent and the flutter emit animationend; only the
          // descent ("petal-fall") signals the petal is finished.
          onAnimationEnd={(event) => {
            if (event.animationName === 'petal-fall') removePetal(petal.id)
          }}
        >
          <span className="petal__inner" />
        </span>
      ))}
    </div>
  )
}
