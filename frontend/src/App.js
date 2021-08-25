import { useEffect, useState } from "react"
import axios from "axios"

import "./App.css"

function App() {
  const [tasks, setTasks] = useState([])

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

  return (
    <div className="App">
      <h1>To-Do List</h1>
    </div>
  )
}

export default App
