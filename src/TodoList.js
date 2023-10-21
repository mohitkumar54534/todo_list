// src/TodoList.js
import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateTask = (index, updatedText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedText;
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingTask === index ? (
              <>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => updateTask(index, e.target.value)}
                />
                <button onClick={() => updateTask(index, task)}>Save</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => setEditingTask(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
