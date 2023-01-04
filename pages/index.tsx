import { NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react'
import { Add } from 'components/Add'
import { Todo } from 'types'

type Props = {
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

const Home: NextPage<Props> = ({ todos, setTodos }) => {
  const toggleIsDone = (id: Todo['id']) => {
    setTodos((prevTodos: Todo[]) => {
      return prevTodos.map((todo: Todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: !todo.isDone }
        }
        return todo
      })
    })
  }

  return (
    <div>
      <h1>React状態管理</h1>
      <h3>useState</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: '2rem' }}>
            <input
              type='checkbox'
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
              style={{ width: '1.5rem', height: '1.5rem' }}
            />
            {todo.text}
          </label>
        </div>
      ))}
      <Add setTodos={setTodos} />
    </div>
  )
}

export default Home
