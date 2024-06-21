import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../redux/todoSlice';

export default function TodoList() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(todoList);

  const todoListView = todoList.map((todo, idx) => (
    <li key={todoList[idx].id}>
      <input
        type="checkbox"
        onChange={() => dispatch(complete(todoList[idx].id))}
      />
      <div>
        {todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}
      </div>
      <button type="button" onClick={() => dispatch(remove(todoList[idx].id))}>
        X
      </button>
    </li>
  ));

  return (
    <>
      <ul>{todoListView}</ul>
    </>
  );
}
