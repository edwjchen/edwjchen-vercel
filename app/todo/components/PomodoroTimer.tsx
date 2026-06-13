import { useRef } from 'react'
import { usePomodoro } from '../hooks/usePomodoro'
import { useTheme } from '../themes/context'
import { emitPetalBurst } from './petalBurst'

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

/** A short, gentle two-note chime. No-ops where Web Audio is unavailable. */
function playChime() {
  if (typeof AudioContext === 'undefined') return
  try {
    const ctx = new AudioContext()
    const now = ctx.currentTime
    ;[660, 880].forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = 'sine'
      osc.frequency.value = freq
      const start = now + i * 0.18
      gain.gain.setValueAtTime(0.0001, start)
      gain.gain.exponentialRampToValueAtTime(0.18, start + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.35)
      osc.start(start)
      osc.stop(start + 0.36)
    })
    setTimeout(() => ctx.close(), 1000)
  } catch {
    // Ignore audio failures — the petal burst is the primary cue.
  }
}

export function PomodoroTimer() {
  const barRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  // Traveler icons in journey order (start → finish). The marker slides across
  // the bar and SWAPS to the next icon as it passes each 1/N milestone, so a
  // party progresses member-by-member. A theme may provide none, in which case
  // only the marker travels (the bar renders in a compact, head-free layout).
  const { icons, marker } = theme.timer
  const hasHeads = icons.length > 0

  const { timeLeft, duration, isRunning, toggle, reset } = usePomodoro(() => {
    // Celebrate a completed session with a petal burst + chime.
    const rect = barRef.current?.getBoundingClientRect()
    const x = rect ? rect.right : window.innerWidth / 2
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2
    emitPetalBurst(x, y)
    playChime()
  })

  // Fraction of the journey completed (0 at the start, 1 at the end).
  const progress = duration ? 1 - timeLeft / duration : 0
  const pct = `${(progress * 100).toFixed(2)}%`

  // Which member is currently traveling — swaps at each 1/N milestone.
  const travelerIndex = hasHeads
    ? Math.min(icons.length - 1, Math.floor(progress * icons.length))
    : -1

  return (
    <section
      className={`app__card pomodoro${hasHeads ? '' : ' pomodoro--compact'}`}
      aria-label="Session timer"
    >
      <div
        className="pomodoro__bar"
        ref={barRef}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={duration}
        aria-valuenow={duration - timeLeft}
      >
        <div className="pomodoro__fill" style={{ width: pct }} />
        {/* All member heads are mounted (so they're preloaded) and stacked at
            the same spot; only the current one is shown. This avoids a reload
            flicker when swapping members at each milestone. */}
        {icons.map((src, i) => (
          <img
            key={src}
            className="pomodoro__head"
            style={{ left: pct, opacity: i === travelerIndex ? 1 : 0 }}
            src={src}
            alt=""
          />
        ))}
        <img
          className="pomodoro__flower"
          style={{ left: pct }}
          src={marker}
          alt=""
        />
      </div>

      <div className="pomodoro__row">
        <span className="pomodoro__time" role="timer" aria-live="off">
          {formatTime(timeLeft)}
        </span>
        <button
          type="button"
          className="pomodoro__btn pomodoro__btn--primary"
          onClick={toggle}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button type="button" className="pomodoro__btn" onClick={reset}>
          Reset
        </button>
      </div>
    </section>
  )
}
