import { useState } from 'react'
import type { Todo } from '../types'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  emptyMessage: string
  onToggle: (id: string) => void
  onEdit: (id: string, title: string) => void
  onRemove: (id: string) => void
  onMove: (sourceId: string, targetId: string) => void
}

export function TodoList({
  todos,
  emptyMessage,
  onToggle,
  onEdit,
  onRemove,
  onMove,
}: TodoListProps) {
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)

  const reset = () => {
    setDraggingId(null)
    setDragOverId(null)
  }

  const handleDrop = (targetId: string) => {
    if (draggingId) onMove(draggingId, targetId)
    reset()
  }

  if (todos.length === 0) {
    return <p className="todo-list__empty">{emptyMessage}</p>
  }

  return (
    <ul className="todo-list" aria-label="Todo items">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isDragging={draggingId === todo.id}
          isDragOver={dragOverId === todo.id && draggingId !== todo.id}
          onToggle={onToggle}
          onEdit={onEdit}
          onRemove={onRemove}
          onDragStart={setDraggingId}
          onDragEnterItem={setDragOverId}
          onDropItem={handleDrop}
          onDragEnd={reset}
        />
      ))}
    </ul>
  )
}
