import React, { useState } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const [items, setItems] = useState([]);

  function handleSubmit(newItem) {
    setItems(previousItems => previousItems.concat(newItem));
  }

  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={items} />
      <TodoForm items={items} onSubmit={handleSubmit} />
    </div>
  );
}

export default TodoApp;
