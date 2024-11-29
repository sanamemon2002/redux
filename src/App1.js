import React, { useState } from 'react';
import { RecoilRoot, atom, useRecoilState } from 'recoil';


const tasksState = atom({
  key: 'tasksState',
  default: [], 
});


const TaskItem = ({ task, index, toggleComplete, removeTask }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(index)}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flex: 1 }}>
        {task.text}
      </span>
      <button onClick={() => removeTask(index)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
};


const ToDoList = () => {
  const [tasks, setTasks] = useRecoilState(tasksState); 
  const [inputValue, setInputValue] = useState(''); 

  
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

 
  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            toggleComplete={toggleComplete}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
};


const App1 = () => {
  return (
    <RecoilRoot>
      <ToDoList />
    </RecoilRoot>
  );
};

export default App1;
