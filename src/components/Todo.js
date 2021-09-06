import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import TodoForm from "./TodoForm";

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} value={edit.value} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        className="todo-width"
        title="Click if the todo is completed"
      >
        {todo.text}
      </div>
      <div className="icons">
        <BsFillTrashFill
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
          title="Delete the todo"
        />

        <BsPencilSquare
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
          title="Edit the todo"
        />
      </div>
    </div>
  ));
}
