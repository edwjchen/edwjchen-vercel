import { useCallback, useMemo } from 'react'
import type { Todo } from '../types'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'todo-list.todos.v1'

/** Generate a stable unique id, falling back gracefully when crypto is absent. */
function createId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
}

export interface UseTodos {
  todos: Todo[]
  remaining: number
  completedCount: number
  addTodo: (title: string) => void
  toggleTodo: (id: string) => void
  editTodo: (id: string, title: string) => void
  removeTodo: (id: string) => void
  moveTodo: (sourceId: string, targetId: string) => void
  clearCompleted: () => void
  toggleAll: (completed: boolean) => void
}

/**
 * Owns the todo collection and exposes a small set of immutable update
 * operations. Order is fully manual (drag to reorder) and persisted via
 * useLocalStorage, so the list survives reloads and syncs across tabs.
 */
export function useTodos(): UseTodos {
  const [todos, setTodos] = useLocalStorage<Todo[]>(STORAGE_KEY, [])

  const addTodo = useCallback(
    (title: string) => {
      const trimmed = title.trim()
      if (!trimmed) return
      const todo: Todo = {
        id: createId(),
        title: trimmed,
        completed: false,
        createdAt: Date.now(),
      }
      // Append to the end; manual ordering is preserved thereafter.
      setTodos((prev) => [...prev, todo])
    },
    [setTodos],
  )

  const toggleTodo = useCallback(
    (id: string) => {
      setTodos((prev) => {
        const target = prev.find((todo) => todo.id === id)
        if (!target) return prev
        const updated = { ...target, completed: !target.completed }
        const rest = prev.filter((todo) => todo.id !== id)
        if (updated.completed) {
          // Completing a task drops it to the bottom of the list.
          return [...rest, updated]
        }
        // Un-completing lifts it back up to just below the last still-active
        // task (i.e. above the completed cluster that sits at the bottom).
        const lastActive = rest.reduce(
          (last, todo, i) => (todo.completed ? last : i),
          -1,
        )
        const insertAt = lastActive + 1
        return [...rest.slice(0, insertAt), updated, ...rest.slice(insertAt)]
      })
    },
    [setTodos],
  )

  const editTodo = useCallback(
    (id: string, title: string) => {
      const trimmed = title.trim()
      setTodos((prev) =>
        // An empty edit removes the todo, matching common todo-app conventions.
        trimmed
          ? prev.map((todo) =>
              todo.id === id ? { ...todo, title: trimmed } : todo,
            )
          : prev.filter((todo) => todo.id !== id),
      )
    },
    [setTodos],
  )

  const removeTodo = useCallback(
    (id: string) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    },
    [setTodos],
  )

  /** Reorder so that `sourceId` lands at the current position of `targetId`. */
  const moveTodo = useCallback(
    (sourceId: string, targetId: string) => {
      if (sourceId === targetId) return
      setTodos((prev) => {
        const from = prev.findIndex((todo) => todo.id === sourceId)
        const to = prev.findIndex((todo) => todo.id === targetId)
        if (from === -1 || to === -1) return prev
        const next = [...prev]
        const [moved] = next.splice(from, 1)
        if (!moved) return prev
        next.splice(to, 0, moved)
        return next
      })
    },
    [setTodos],
  )

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }, [setTodos])

  const toggleAll = useCallback(
    (completed: boolean) => {
      setTodos((prev) => prev.map((todo) => ({ ...todo, completed })))
    },
    [setTodos],
  )

  const remaining = useMemo(
    () => todos.filter((todo) => !todo.completed).length,
    [todos],
  )

  const completedCount = todos.length - remaining

  return {
    todos,
    remaining,
    completedCount,
    addTodo,
    toggleTodo,
    editTodo,
    removeTodo,
    moveTodo,
    clearCompleted,
    toggleAll,
  }
}
