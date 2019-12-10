import React from 'react';

const Todo = props => {
  const { id, toggleComplete, todo, completed } = props;
  return (
    <li
    style={completed ? { textDecoration: 'line-through' } : null}
    onClick={() => toggleComplete(id)}>
    {todo}
  </li>
  );
};

export default Todo;