'use client'

import { Backdrop } from './components/Backdrop'
import { PetalField } from './components/PetalField'
import { PomodoroTimer } from './components/PomodoroTimer'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { TodoFooter } from './components/TodoFooter'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { useTodos } from './hooks/useTodos'
import { useTheme } from './themes/context'
import { ThemeProvider } from './themes/ThemeProvider'
import './todo-base.css'
import './App.css'

function TodoAppContent() {
  const { theme } = useTheme()
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

  // `data-theme` selects the active palette; the Frieren tokens in todo-base.css
  // are keyed off `.todo-page[data-theme='frieren']`, so the rest of the
  // portfolio is never affected.
  return (
    <div className="todo-page" data-theme={theme.id}>
      <Backdrop />
      <PetalField />
      <main className="app">
        <header className="app__header">
          <ThemeSwitcher />
          <h1 className="app__title">{theme.title}</h1>
          <p className="app__subtitle">{theme.subtitle}</p>
        </header>

        <PomodoroTimer />

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
            emptyMessage={theme.emptyMessage}
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

        <footer className="app__footer">
          <p>Drag to reorder · Double-click a task to edit</p>
        </footer>
      </main>
    </div>
  )
}

export default function TodoApp() {
  return (
    <ThemeProvider>
      <TodoAppContent />
    </ThemeProvider>
  )
}
