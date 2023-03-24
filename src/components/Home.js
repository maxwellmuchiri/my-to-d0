import React from 'react';

function Home() {
  const todos = [
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    { id: 3, title: 'Todo 3' }
  ];

  return (
    <div>
      <h1>My To-Dos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button>Update To-Dos</button>
      <button>Delete To-Dos</button>
    </div>
  );
}

export default Home;

