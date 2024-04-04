import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // Import du fichier CSS

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks && storedTasks.length) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filterTasks = (filter) => {
    setFilter(filter);
  };

  let filteredTasks = tasks;
  if (filter === 'done') {
    filteredTasks = tasks.filter((task) => task.completed);
  } else if (filter === 'undone') {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  return (
    <div className="todo-list-container"> {/* Encadrement du contenu avec une classe CSS */}
      <div className="todo-list"> {/* Ajout d'une classe CSS pour l'animation */}
        <h1>Todo List</h1>
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          data-cy="task-list"
        />
        <div className="filter-buttons">
          <button onClick={() => filterTasks('all')} data-cy="filter-btn-all">Toutes</button>
          <button onClick={() => filterTasks('done')} data-cy="filter-btn-done">Complétées</button>
          <button onClick={() => filterTasks('undone')} data-cy="filter-btn-undone">Non complétées</button>
        </div>
      </div>
    </div>
  );
}

export default App;
