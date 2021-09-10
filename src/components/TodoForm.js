import React, { useState, useEffect, useRef } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  let store;

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    store = e.todo;
    setInput("");
  };

  const handleOnKeyPress = (event) => {
    if (event.keyCode === 27) {
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: store
      });
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="todo-form">
          {props.edit ? (
            <>
              <input
                placeholder="Update your item"
                value={input}
                onChange={handleChange}
                name="text"
                ref={inputRef}
                className="todo-input edit"
                onKeyDown={handleOnKeyPress}
              />
              <button onClick={handleSubmit} className="todo-button edit">
                <b> Update </b>
              </button>
            </>
          ) : (
            <>
              <input
                placeholder="Add a todo"
                value={input}
                onChange={handleChange}
                name="text"
                className="todo-input"
                ref={inputRef}
              />
              <button
                onClick={handleSubmit}
                className="todo-button"
                title="Add the todo"
              >
                <b> Add Todo </b>
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
}
