import "./listItem.css"

export function ListItem({ item, setTaskToEdit, deleteTask, markTask }) {
  return (
    <li className="list-item">
      <div>
        <input onClick={() => markTask(item)} type="checkbox" defaultChecked={item.completed} />
        <p>{item.description}</p>
      </div>
      <div>
        <span className="edit-btn" onClick={() => setTaskToEdit(item)}>
          Edit
        </span>
        <span className="delete-btn" onClick={() => deleteTask(item.id)}>
          Delete
        </span>
      </div>
    </li>
  )
}
