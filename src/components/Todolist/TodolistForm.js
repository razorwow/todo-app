import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/todo/todoContext";

export const TodolistForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let todoTitle = title.trim();
    if (todoTitle.length === 0) {
      alert("Please, write todo title.");
      return;
    }
    addTodo(todoTitle);
    setTitle("");
  };

  return (
    <div className="row">
      <form onSubmit={(event) => handleSubmit(event)} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Todo title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <button className="waves-effect waves-light btn right">
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
