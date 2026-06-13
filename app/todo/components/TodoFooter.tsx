interface TodoFooterProps {
  remaining: number
  completedCount: number
  onClearCompleted: () => void
}

export function TodoFooter({
  remaining,
  completedCount,
  onClearCompleted,
}: TodoFooterProps) {
  return (
    <footer className="todo-footer">
      <span className="todo-footer__count">
        <strong>{remaining}</strong> {remaining === 1 ? 'item' : 'items'} left
      </span>

      <button
        type="button"
        className="todo-footer__clear"
        onClick={onClearCompleted}
        disabled={completedCount === 0}
      >
        Clear completed
      </button>
    </footer>
  )
}
