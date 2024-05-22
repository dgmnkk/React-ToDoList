import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { TASKS } from "../tasks";

export default function TasksList() {
  const [tasks, setTasks] = useState(TASKS);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const addTask = (name) => {
    const newTask = {
      id: count,
      name,
      date: Date.now(),
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setName("");
    setCount(count + 1);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <span className="input-container">
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => addTask(name)}>Add</button>
      </span>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}
