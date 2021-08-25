import { useRef } from "react"

import "./updateTask.css"

export function UpdateTask({ taskToEdit, setTaskToEdit, updateTask }) {
  const task = useRef(taskToEdit.description)
  return (
    <div className="update-task">
      <p>Editing Task "{task.current}"</p>
      <input
        type="text"
        value={taskToEdit.description}
        onChange={(e) => setTaskToEdit({ ...taskToEdit, description: e.target.value })}
      />
      <div>
        <button onClick={() => updateTask(taskToEdit.id)}>Save</button>
        <button onClick={() => setTaskToEdit("")}>Cancel</button>
      </div>
    </div>
  )
}
