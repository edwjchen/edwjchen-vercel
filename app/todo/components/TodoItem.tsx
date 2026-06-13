import {
  useEffect,
  useRef,
  useState,
  type DragEvent,
  type KeyboardEvent,
} from 'react'
import type { Todo } from '../types'
import { emitPetalBurst } from './petalBurst'

interface TodoItemProps {
  todo: Todo
  isDragging: boolean
  isDragOver: boolean
  onToggle: (id: string) => void
  onEdit: (id: string, title: string) => void
  onRemove: (id: string) => void
  onDragStart: (id: string) => void
  onDragEnterItem: (id: string) => void
  onDropItem: (id: string) => void
  onDragEnd: () => void
}

export function TodoItem({
  todo,
  isDragging,
  isDragOver,
  onToggle,
  onEdit,
  onRemove,
  onDragStart,
  onDragEnterItem,
  onDropItem,
  onDragEnd,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
      inputRef.current?.select()
    }
  }, [isEditing])

  const startEditing = () => {
    setDraft(todo.title)
    setIsEditing(true)
  }

  const commit = () => {
    onEdit(todo.id, draft)
    setIsEditing(false)
  }

  const cancel = () => {
    setDraft(todo.title)
    setIsEditing(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') commit()
    if (event.key === 'Escape') cancel()
  }

  const handleDragStart = (event: DragEvent<HTMLLIElement>) => {
    event.dataTransfer.effectAllowed = 'move'
    // Some browsers require data to be set for a drag to begin.
    event.dataTransfer.setData('text/plain', todo.id)
    onDragStart(todo.id)
  }

  const className = [
    'todo-item',
    todo.completed ? 'todo-item--completed' : '',
    isDragging ? 'todo-item--dragging' : '',
    isDragOver ? 'todo-item--dragover' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <li
      className={className}
      data-testid="todo-item"
      // Dragging is disabled while editing so text selection keeps working.
      draggable={!isEditing}
      onDragStart={handleDragStart}
      onDragEnter={(event) => {
        event.preventDefault()
        onDragEnterItem(todo.id)
      }}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault()
        onDropItem(todo.id)
      }}
      onDragEnd={onDragEnd}
    >
      <span className="todo-item__handle" aria-hidden="true" title="Drag to reorder">
        ⠿
      </span>

      <input
        className="todo-item__checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={(event) => {
          // Celebrate completing a task (but not un-completing) with a burst.
          if (!todo.completed) {
            const rect = event.currentTarget.getBoundingClientRect()
            emitPetalBurst(rect.left + rect.width / 2, rect.top + rect.height / 2)
          }
          onToggle(todo.id)
        }}
        aria-label={`Mark "${todo.title}" as ${
          todo.completed ? 'incomplete' : 'complete'
        }`}
      />

      {isEditing ? (
        <input
          ref={inputRef}
          className="todo-item__edit"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={commit}
          onKeyDown={handleKeyDown}
          aria-label="Edit todo title"
        />
      ) : (
        <span
          className="todo-item__title"
          onDoubleClick={startEditing}
          title="Double-click to edit"
        >
          {todo.title}
        </span>
      )}

      <button
        className="todo-item__delete"
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label={`Delete "${todo.title}"`}
      >
        ✕
      </button>
    </li>
  )
}
