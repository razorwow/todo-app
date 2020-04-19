import React, { useContext } from "react";
import { TodoContext } from "../../context/todo/todoContext";
import { TodolistItem } from "./TodolistItem";

export const TodolistItems = () => {
  function sortTodos(a, b) {
    let firstTitle = a.title;
    let secondTitle = b.title;

    let comparison = 0;

    if (firstTitle > secondTitle) {
      comparison = 1;
    } else if (firstTitle < secondTitle) {
      comparison = -1;
    }
    return comparison * -1;
  }

  const { todos } = useContext(TodoContext);
  todos.sort(sortTodos);

  return (
    <div className="todo-list-items">
      {todos.length === 0 ? (
        <div className="center">You have done all todos. Congratulation!</div>
      ) : (
        <ul className="collection">
          {todos.map((todo) => (
            <TodolistItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};
