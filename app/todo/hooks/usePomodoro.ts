import { useCallback, useEffect, useRef, useState } from 'react'

/** Focus session length in seconds. */
export const FOCUS_DURATION = 25 * 60

export interface UsePomodoro {
  timeLeft: number
  duration: number
  isRunning: boolean
  completed: number
  toggle: () => void
  reset: () => void
}

/**
 * A simple 25-minute focus timer. Counts down by decrementing a per-second
 * counter (so it plays nicely with fake timers in tests); when it reaches zero
 * it stops, tallies a completed session, resets to a fresh 25:00, and calls
 * `onComplete` — which the UI uses to celebrate.
 */
export function usePomodoro(onComplete?: () => void): UsePomodoro {
  const [timeLeft, setTimeLeft] = useState(FOCUS_DURATION)
  const [isRunning, setIsRunning] = useState(false)
  const [completed, setCompleted] = useState(0)

  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  // Tick once per second while running.
  useEffect(() => {
    if (!isRunning) return
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearInterval(id)
  }, [isRunning])

  // Handle the session reaching zero.
  useEffect(() => {
    if (timeLeft > 0) return
    setIsRunning(false)
    setCompleted((c) => c + 1)
    setTimeLeft(FOCUS_DURATION)
    onCompleteRef.current?.()
  }, [timeLeft])

  const toggle = useCallback(() => setIsRunning((r) => !r), [])

  const reset = useCallback(() => {
    setIsRunning(false)
    setTimeLeft(FOCUS_DURATION)
  }, [])

  return {
    timeLeft,
    duration: FOCUS_DURATION,
    isRunning,
    completed,
    toggle,
    reset,
  }
}
