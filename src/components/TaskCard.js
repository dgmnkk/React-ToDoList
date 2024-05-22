import React from "react";
export default function TaskCard({ task, deleteTask, toggleCompleted }) {
  const handleChange = () => {
    toggleCompleted(task.id);
  };

  return (
    <div className="todo-item">
      <div>
        <h3>{task.name}</h3>
        <p>{new Date(task.date).toLocaleString()}</p>
      </div>
      <div>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleChange}
        />
        <button onClick={() => deleteTask(task.id)}>X</button>
      </div>
    </div>
  );
}
