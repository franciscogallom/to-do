import { useEffect, useState } from "react"
import axios from "axios"

import "./App.css"

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState()

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = () => {
    axios
      .get("http://localhost:8080/tasks")
      .then((res) => {
        setTasks(res.data)
        console.log(tasks)
      })
      .catch((e) => console.log(e))
  }

  const addTask = () => {
    axios
      .post("http://localhost:8080/tasks", {
        description: newTask,
        completed: false,
      })
      .then((res) => {
        setTasks([...tasks, res.data])
        document.getElementById("addTaskInput").value = ""
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:8080/tasks/${id}`)
      .then((res) => {
        const updatedTasks = tasks.filter((item) => item.id !== id)
        setTasks(updatedTasks)
        console.log(`elimino ${res.data}`)
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <div className="new-task">
        <input
          id="addTaskInput"
          type="text"
          placeholder="New Task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  )
}

export default App
