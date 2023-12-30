
// Todo.js
import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'My task 1', completed: false },
    { id: 2, task: 'My task 2', completed: false },
    { id: 3, task: 'My task 3', completed: false },
    { id: 4, task: 'My task 4', completed: false },
    { id: 5, task: 'My task 5', completed: false },
  ]);

  const handleTaskCompletion = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>My Daily Goals</h1>
      {todos.map(todo => (
        <div key={todo.id} style={{ marginBottom: '10px' }}>
          <span style={{ marginRight: '10px' }}>
            {todo.completed ? '✅' : '0'}
          </span>
          {todo.task}
          <button onClick={() => handleTaskCompletion(todo.id)}>
            {todo.completed ? 'Unmark' : 'Mark'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;

