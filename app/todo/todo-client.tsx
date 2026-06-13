'use client'

import dynamic from 'next/dynamic'

// The todo app is a fully client-side SPA (localStorage, window, audio, drag).
// Disable SSR so there's no hydration mismatch from persisted state.
const TodoApp = dynamic(() => import('./TodoApp'), { ssr: false })

export default function TodoClient() {
  return <TodoApp />
}
