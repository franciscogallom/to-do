import "./listItem.css"

export function ListItem({ item, setTaskToEdit, deleteTask }) {
  return (
    <li className="list-item">
      <div>
        <input type="checkbox" />
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
