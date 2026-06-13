'use client'

import { MountainBackdrop } from './components/MountainBackdrop'
import { PetalField } from './components/PetalField'
import { PomodoroTimer } from './components/PomodoroTimer'
import { TodoFooter } from './components/TodoFooter'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { useTodos } from './hooks/useTodos'
import './todo-base.css'
import './App.css'

export default function TodoApp() {
  const {
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
  } = useTodos()

  const allComplete = todos.length > 0 && remaining === 0

  return (
    <div className="todo-page">
      <MountainBackdrop />
      <PetalField />
      <main className="app">
        <header className="app__header">
          <h1 className="app__title">Climbing Mount Hua</h1>
          <p className="app__subtitle">Get to work, you little shi-.</p>
        </header>

        <section className="app__card">
          <TodoInput onAdd={addTodo} />

          {todos.length > 0 && (
            <button
              type="button"
              className="app__toggle-all"
              onClick={() => toggleAll(!allComplete)}
            >
              {allComplete ? 'Mark all as active' : 'Mark all as complete'}
            </button>
          )}

          <TodoList
            todos={todos}
            emptyMessage="Nothing here yet — add your first task above."
            onToggle={toggleTodo}
            onEdit={editTodo}
            onRemove={removeTodo}
            onMove={moveTodo}
          />

          {todos.length > 0 && (
            <TodoFooter
              remaining={remaining}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          )}
        </section>

        <PomodoroTimer />

        <footer className="app__footer">
          <p>Drag to reorder · Double-click a task to edit</p>
        </footer>
      </main>
    </div>
  )
}
