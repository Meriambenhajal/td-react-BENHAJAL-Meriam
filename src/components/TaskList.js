import React from 'react';
import './TaskList.css';
function TaskList({ tasks, toggleTask }) {
  return (
    <ul data-cy="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => toggleTask(task.id)}
        //   style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        className={`task-list-item ${task.completed ? 'completed' : ''}`}
          data-cy="task-item"
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
