import React, { useContext, useState, useEffect } from 'react';
//import TaskList from './TaskList';
import { TaskListContext } from '../contexts/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("")
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder='Add Task...'
        required
      />
      <div className='buttons'>
        <button typeof='submit' className='btn add-task-btn'>
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button onClick={clearList} className='btn clear-btn'> Clear A Task</button>
      </div>
    </form>
  );
}

export default TaskForm;
