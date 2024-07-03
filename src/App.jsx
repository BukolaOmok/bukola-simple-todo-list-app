import React from "react";
import "./App.css";

export default function App() {
  const [currentTask, setCurrentTask] = React.useState([]);
  const [completedTask, setCompletedTask] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (newTask !== "") {
    setCurrentTask((currentTask) => [
      ...currentTask,
      { text: newTask, completed: false },
    ]);
    setNewTask("");
  }
  };

  const handleTaskCompletion = (index) => {
    const task = { ...currentTask[index], completed: true };
    const newCurrentTasks = [...currentTask];
    newCurrentTasks.splice(index, 1);
    setCurrentTask(newCurrentTasks);
    setCompletedTask((completedTask) => [...completedTask, task]);
  };

  const handleTaskReactivation = (index) => {
    const task = { ...completedTask[index], completed: false };
    const newCompletedTasks = [...completedTask];
    newCompletedTasks.splice(index, 1);
    setCompletedTask(newCompletedTasks);
    setCurrentTask((currentTask) => [...currentTask, task]);
  };

  return (
    <div className="content-style">
      <div>
        <h1>Bukola Simple To-do List App</h1>
      </div>
      <div>
        <input
          type="text"
          name="newTask"
          value={newTask}
          placeholder="Add a new task..."
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <h2>Current Tasks</h2>
        {currentTask.map((task, index) => (
          <p key={index}>
            <input
              type="checkbox"
              onChange={() => handleTaskCompletion(index)}
            />
            {task.text}
          </p>
        ))}
      </div>
      <div>
        <h2>Completed Tasks</h2>
        {completedTask.map((task, index) => (
          <p key={index}>
            <input
              type="checkbox"
              checked
              onChange={() => handleTaskReactivation(index)}
            />
            {task.text}
          </p>
        ))}
      </div>
    </div>
  );
}
