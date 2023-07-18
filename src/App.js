import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import EditForm from './components/EditForm'

function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: 'test1', status: '未着手' },
    { id: 1, title: 'test2', status: '進行中' },
    { id: 2, title: 'test3', status: '完了' },
  ])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoId, setTodoId] = useState('')
  const [isEditFormSelected, setIsEditFormSelected] = useState(false)

  const addTodo = (e) => {
    setTodoId(uuidv4())
    setTodos([...todos, { id: todoId, title: todoTitle, status: '未着手' }])
    // TODO : addTodo関数を実施後にe.target.valueの値を削除する必要がある
  }

  const deleteTodo = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  const openEditForm = (title) => {
    setIsEditFormSelected(true)
    setTodoTitle(title)
  }

  return (
    <>
      {/* TODO作成フォーム */}
      <form>
        <label htmlFor='title'>タイトル: </label>
        <input
          type='text'
          id='title'
          placeholder='タイトル'
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </form>
      <button onClick={addTodo} disabled={!todoTitle}>
        作成
      </button>

      {/* Todoを表示 */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              ({todo.status}) {todo.title}
            </span>
            <button onClick={() => openEditForm(todo.title)}>編集</button>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>

      {isEditFormSelected && (
        <EditForm
          title={todoTitle}
          setIsEditFormSelected={setIsEditFormSelected}
        />
      )}
    </>
  )
}

export default App
