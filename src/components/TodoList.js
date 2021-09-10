import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Popup from "./Popup";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(0);
  const addTodo = (e) => {
    if (!e.text || /^\s*$/.test(e.text)) {
      return e.text;
    }
    const newTodos = [e, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return newValue.text;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );

    setUpdate(update + 1);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const func = () => {
    if (update > 0) {
      let msg = "Your todo has been updated";
      setTimeout(() => {
        setUpdate(update - 1);
      }, 5000);
      return msg;
    }
  };
  return (
    <>
      <Popup func={func()} update={update} />
      <div className="todo-app">
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}
