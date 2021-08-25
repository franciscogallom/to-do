import { useEffect, useState } from "react"
import axios from "axios"

import { ItemsList } from "./components/ItemsList/ItemsList"
import { UpdateTask } from "./components/UpdateTask/UpdateTask"
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState()
  const [taskToEdit, setTaskToEdit] = useState({})
  const [error, setError] = useState()

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = () => {
    axios
      .get("http://localhost:8080/tasks")
      .then((res) => {
        setTasks(res.data)
      })
      .catch(() => setError("obtener las tareas"))
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
      .catch(() => setError("añadir la tarea"))
  }

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:8080/tasks/${id}`)
      .then((res) => {
        const updatedTasks = tasks.filter((item) => item.id !== id)
        setTasks(updatedTasks)
      })
      .catch(() => setError("borrar la tarea"))
  }

  const updateTask = (id) => {
    axios
      .put(`http://localhost:8080/tasks/${id}`, {
        description: taskToEdit.description,
      })
      .then((res) => {
        setTaskToEdit({})
        const updatedTasks = tasks.map((item) => (item.id === res.data.id ? res.data : item))
        setTasks(updatedTasks)
      })
      .catch(() => setError("actualizar la tarea"))
  }

  const markTask = (item) => {
    axios
      .put(`http://localhost:8080/tasks/${item.id}`, {
        completed: !item.completed,
      })
      .then((res) => {
        const updatedTasks = tasks.map((item) => (item.id === res.data.id ? res.data : item))
        setTasks(updatedTasks)
      })
      .catch(() => setError("cambiar el estado de la tarea"))
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {Object.keys(taskToEdit).length ? (
        <UpdateTask taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} updateTask={updateTask} />
      ) : (
        <ItemsList
          tasks={tasks}
          setTaskToEdit={setTaskToEdit}
          deleteTask={deleteTask}
          markTask={markTask}
        />
      )}

      {error && (
        <p className="error">
          Algo salio mal al {error}. Recargue la página y vuelva a intentarlo.
        </p>
      )}

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
