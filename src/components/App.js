import { MainPage } from './MainPage'

import '../App.css'

function App() {
  // const removeTask = async (id) => {
  //   await fetch(`http://localhost:3004/tasks/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   setData(data.filter((task) => task.id !== id))
  // }

  // const updateTask = async (id, changeValue) => {
  //   const taskItemIndex = data.findIndex((task) => task.id === id)
  //   const taskItem = data.find((task) => task.id === id)
  //   if (taskItemIndex !== -1) {
  //     const response = await fetch(`http://localhost:3004/tasks/${id}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ ...taskItem, title: changeValue }),
  //     })
  //     const updatedTask = await response.json()
  //     const copyData = data.slice()
  //     copyData[taskItemIndex] = updatedTask
  //     setData(copyData)
  //   }
  // }

  // const updateChecked = async (id, changeChecked) => {
  //   const taskItemIndex = data.findIndex((task) => task.id === id)
  //   const taskItem = data.find((task) => task.id === id)
  //   if (taskItemIndex !== -1) {
  //     const response = await fetch(`http://localhost:3004/tasks/${id}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ ...taskItem, completed: changeChecked }),
  //     })
  //     const updatedTask = await response.json()
  //     const copyData = data.slice()
  //     copyData[taskItemIndex] = updatedTask
  //     setData(copyData)
  //   }
  // }

  return (
    // <div>
    //   <input
    //     placeholder="Поиск задачи"
    //     value={searchQuery}
    //     onChange={handleSearchQuery}
    //   />
    //   {!sortTask ? (
    //     <button className="sortTask" onClick={taskSort}>
    //       Сортировка по алфавиту
    //     </button>
    //   ) : (
    //     <button className="numberSortTask" onClick={taskSort}>
    //       Сортировка по порядку
    //     </button>
    //   )}
    //   <h1>Список задач</h1>
    //   <ul>
    //     {data.length > 0 ? (
    //       <div>
    //         {data.map((post, id) => (
    //           <PostItem
    //             key={id}
    //             {...post}
    //             removeTask={removeTask}
    //             updateTask={updateTask}
    //             updateChecked={updateChecked}
    //           />
    //         ))}
    //       </div>
    //     ) : (
    //       'Задач нет'
    //     )}
    //   </ul>
    //   <form>
    //     <input
    //       type="text"
    //       autoFocus={true}
    //       placeholder="Название задачи"
    //       value={task.title}
    //       onChange={(e) => setTask({ ...task, title: e.target.value })}
    //     />
    //     <button
    //       type="submit"
    //       disabled={!task.title}
    //       className="createTask"
    //       onClick={(e) => createTask({ ...task }, e.preventDefault())}
    //     >
    //       Создать задачу
    //     </button>
    //   </form>
    // </div>
    <>
      <MainPage />
    </>
  )
}

export default App
