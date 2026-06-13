import { useState, type FormEvent } from 'react'

interface TodoInputProps {
  onAdd: (title: string) => void
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [title, setTitle] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!title.trim()) return
    onAdd(title)
    setTitle('')
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        className="todo-input__field"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="What needs to be done?"
        aria-label="New todo title"
        autoFocus
      />
      <button className="todo-input__submit" type="submit" disabled={!title.trim()}>
        Add
      </button>
    </form>
  )
}
