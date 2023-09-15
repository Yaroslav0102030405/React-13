import React from 'react';
import './Todolist.css'

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className='TodoList'>
    {todos.map(({ id, text }) => (
      <li key={id} className='TodoList__item'>
        <p className='TodoList___text'>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
