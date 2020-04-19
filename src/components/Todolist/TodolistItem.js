import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/todo/todoContext";
import PropTypes from "prop-types";

export const TodolistItem = ({ todo }) => {
  const { editTodo, removeTodo, completeTodo } = useContext(TodoContext);
  let [edit, setEdit] = useState(false);
  let [editedTitle, setEditedTitle] = useState("");

  const handleClick = () => {
    let todoTitle = editedTitle.trim();
    if (todoTitle.length === 0) {
      alert("Please, write todo title.");
      return;
    }
    editTodo(todo.id, editedTitle);
    setEdit((prevState) => !prevState);
  };
  return (
    <li className="collection-item todo-item">
      {edit ? (
        <React.Fragment>
          <div className="input-field">
            <input
              type="text"
              value={editedTitle}
              placeholder="Edit Todo"
              onChange={(event) => setEditedTitle(event.target.value)}
            />
          </div>

          <p className="todo-item-buttons">
            <button
              onClick={handleClick}
              className="btn-floating btn-small waves-effect waves-light"
            >
              <i className="material-icons">done</i>
            </button>
          </p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <label className="todo-item-title">
            <input
              onChange={() => completeTodo(todo.id)}
              checked={todo.completed}
              type="checkbox"
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.title}
            </span>
          </label>
          <p className="todo-item-buttons">
            <button
              onClick={() => {
                setEdit((prevState) => !prevState);
                setEditedTitle(todo.title);
              }}
              className="btn-floating btn-small waves-effect waves-light"
            >
              <i className="material-icons">edit</i>
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="btn-floating btn-small waves-effect waves-light"
            >
              <i className="material-icons">delete</i>
            </button>
          </p>
        </React.Fragment>
      )}
    </li>
  );
};

TodolistItem.propTypes = {
  todo: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};
