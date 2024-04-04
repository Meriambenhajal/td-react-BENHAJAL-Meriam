import React, { useState } from 'react';
import './TaskForm.css';
function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} data-cy="task-form">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Entrez une nouvelle tâche"
        className="task-input" // Ajout de la classe CSS
        data-cy="task-input"
      />
      <button className="button" type="submit" data-cy="add-task-btn">
        Ajouter
      </button>
    </form>
  );
}

export default TaskForm;
