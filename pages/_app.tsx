import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Todo } from 'types'

const TODOS: Todo[] = [
  { id: 1, text: 'foo', isDone: false },
  { id: 2, text: 'bar', isDone: true },
]

export default function App({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS)
  return (
    <>
      <main>
        <Component {...pageProps} todos={todos} setTodos={setTodos} />
      </main>
    </>
  )
}
