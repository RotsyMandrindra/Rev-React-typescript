import React, { useState } from 'react';
import { useTaskManager } from './useTaskManager'; 
import "./TaskManager.css";

const TaskManager: React.FC = () => {
 const { tasks, addTask, deleteTask, updateTask, setSearchKeyword } = useTaskManager();


 const [inputValue, setInputValue] = useState<string>('');

 return (
    <div className="container">
      <h1>Task Manager</h1>

      <div>
        <input type="text" onChange={(e) => setSearchKeyword(e.target.value)} placeholder="Search Task" />
      </div>

      <div className="task">
        <input
          type="text"
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}         />

        {}
        <button onClick={() => addTask(inputValue)}>Add Task</button>
      </div>

      <ul className="container">
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => updateTask(task.id, { title: e.target.value })}
              />
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default TaskManager;
