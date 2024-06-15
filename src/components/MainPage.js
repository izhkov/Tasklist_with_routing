import { useState, useEffect } from 'react'
import { useDebounce } from '../useDebounce'
import { TasksOnTheMainPage } from './TasksOnTheMainPage'
import '../App.css'

export const MainPage = () => {
  const [data, setData] = useState([])
  const [task, setTask] = useState({ title: '', completed: false })
  const [searchQuery, setSearchQuery] = useState('')
  const [sortTask, setSortTask] = useState(false)
  const valueSearch = useDebounce(searchQuery)

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value)
  }

  useEffect(() => {
    fetch(`http://localhost:3004/tasks/?q=${valueSearch}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [valueSearch])

  const createTask = async (payload) => {
    const response = await fetch('http://localhost:3004/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const post = await response.json()
    setData((prevState) => [...prevState, post])
    setTask({ title: '', completed: false })
  }

  const taskSort = () => {
    setSortTask((prevState) => !prevState)
    if (!sortTask) {
      fetch(`http://localhost:3004/tasks?_sort=title&_order=asc`).then(
        (response) => response.json().then((data) => setData(data))
      )
    } else {
      fetch(`http://localhost:3004/tasks`).then((response) =>
        response.json().then((data) => setData(data))
      )
    }
  }

  const updateChecked = async (id, changeChecked) => {
    const taskItemIndex = data.findIndex((task) => task.id === id)
    const taskItem = data.find((task) => task.id === id)
    if (taskItemIndex !== -1) {
      const response = await fetch(`http://localhost:3004/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...taskItem, completed: changeChecked }),
      })
      const updatedTask = await response.json()
      const copyData = data.slice()
      copyData[taskItemIndex] = updatedTask
      setData(copyData)
    }
  }

  return (
    <div>
      <input
        placeholder="Поиск задачи"
        value={searchQuery}
        onChange={handleSearchQuery}
      />
      {!sortTask ? (
        <button className="sortTask" onClick={taskSort}>
          Сортировка по алфавиту
        </button>
      ) : (
        <button className="numberSortTask" onClick={taskSort}>
          Сортировка по порядку
        </button>
      )}
      <h1>Список задач</h1>
      <ul>
        {data.length > 0 ? (
          <div>
            {data.map((post, id) => (
              <TasksOnTheMainPage
                key={id}
                {...post}
                updateChecked={updateChecked}
              />
            ))}
          </div>
        ) : (
          'Задач нет'
        )}
      </ul>
      <form>
        <input
          type="text"
          autoFocus={true}
          placeholder="Название задачи"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <button
          type="submit"
          disabled={!task.title}
          className="createTask"
          onClick={(e) => createTask({ ...task }, e.preventDefault())}
        >
          Создать задачу
        </button>
      </form>
    </div>
  )
}
