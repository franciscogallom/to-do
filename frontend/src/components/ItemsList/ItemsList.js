import { ListItem } from "../ListItem/ListItem"

import "./itemsList.css"

export function ItemsList({ tasks, setModal, setTaskToEdit, deleteTask, markTask }) {
  return (
    <div className="items-list">
      {tasks.length ? (
        <ul>
          {tasks.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              setModal={setModal}
              setTaskToEdit={setTaskToEdit}
              deleteTask={deleteTask}
              markTask={markTask}
            />
          ))}
        </ul>
      ) : (
        <p className="no-items">No hay tareas para realizar ✔️.</p>
      )}
    </div>
  )
}
