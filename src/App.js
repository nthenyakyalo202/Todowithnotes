/// src/components/TodoApp.js
import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [todos, setTodos] = useState([
    { text: 'Jukumu la kwanza', completed: false, category: 'Work', dueDate: '2023-09-20', note: '' },
    { text: 'Jukumu la pili', completed: true, category: 'Personal', dueDate: '2023-09-25', note: '' },
  ]);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTodo = () => {
    if (task && category && dueDate) {
      setTodos([...todos, { text: task, completed: false, category, dueDate, note: '' }]);
      setTask('');
      setCategory('');
      setDueDate('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={task}
        placeholder="Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text} - {todo.category} - Due: {todo.dueDate}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <textarea
              rows="3"
              cols="30"
              placeholder="Add a note"
              value={todo.note}
              onChange={(e) => {
                const updatedTodos = todos.map((t, i) =>
                  i === index ? { ...t, note: e.target.value } : t
                );
                setTodos(updatedTodos);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;