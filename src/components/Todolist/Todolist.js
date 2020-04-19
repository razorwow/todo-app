import React from "react";
import { TodolistForm } from "./TodolistForm";
import { TodolistItems } from "./TodolistItems";
import { TodoState } from "../../context/todo/TodoState";

export const TodoList = () => {
  return (
    <TodoState>
      <div className="todo-list">
        <TodolistForm />
        <TodolistItems />
      </div>
    </TodoState>
  );
};
