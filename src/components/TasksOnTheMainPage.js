import React from 'react'
import { useState } from 'react'

export const TasksOnTheMainPage = ({ id, title, completed, updateChecked }) => {
  const [changeChecked, setChangeChecked] = useState(true)

  const updateCheck = () => {
    setChangeChecked((prevState) => !prevState)
  }

  return (
    <div className="postItem">
      <div className="container">
        {id}.{title}
        <input
          type="checkbox"
          checked={completed}
          onChange={() => updateChecked(id, changeChecked, updateCheck())}
        />
      </div>
    </div>
  )
}
