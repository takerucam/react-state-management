import { ComponentProps, Dispatch, FC, SetStateAction } from 'react'
import { Todo } from 'types'

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

export const Add: FC<Props> = ({ setTodos }) => {
  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (event) => {
    event.preventDefault()
    const text = event.currentTarget.text.value
    setTodos((prevTodos: Todo[]) => {
      const newTodo = { id: prevTodos.length + 1, text: text, isDone: false }
      return [...prevTodos, newTodo]
    })
    event.currentTarget.reset()
  }

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' name='text' autoComplete='off' required />
        <button>追加</button>
      </form>
    </div>
  )
}
