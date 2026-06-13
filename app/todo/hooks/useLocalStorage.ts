import { useCallback, useEffect, useState } from 'react'

/**
 * A useState-like hook that transparently persists its value to localStorage
 * and keeps multiple tabs in sync via the `storage` event.
 *
 * The initial value is read lazily so we only touch localStorage once on mount.
 * Reads and writes are wrapped in try/catch because localStorage can throw
 * (private browsing quota limits, corrupted JSON, disabled storage).
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`useLocalStorage: failed to read key "${key}"`, error)
      return initialValue
    }
  }, [key, initialValue])

  const [storedValue, setStoredValue] = useState<T>(readValue)

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const next = value instanceof Function ? value(prev) : value
        try {
          window.localStorage.setItem(key, JSON.stringify(next))
        } catch (error) {
          console.warn(`useLocalStorage: failed to write key "${key}"`, error)
        }
        return next
      })
    },
    [key],
  )

  // Keep state in sync when the same key is changed in another tab/window.
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setStoredValue(JSON.parse(event.newValue) as T)
        } catch (error) {
          console.warn(`useLocalStorage: failed to sync key "${key}"`, error)
        }
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [key])

  return [storedValue, setValue]
}
