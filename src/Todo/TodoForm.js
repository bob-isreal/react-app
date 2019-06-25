import React, { useState } from 'react';

function TodoForm(props) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) {
      alert('PleaseAdd an item');
      return;
    }

    const newItem = {
      text,
      id: Date.now()
    };

    props.onSubmit(newItem);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">What needs to be done?</label>
      <input id="new-todo" onChange={handleChange} value={text} />
      <button>Add #{props.items.length + 1}</button>
    </form>
  );
}

export default TodoForm;
