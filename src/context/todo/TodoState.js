import React, { useReducer } from "react";
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, EDIT_TODO } from "../types";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (title) => {
    const todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  const editTodo = (id, title) => {
    dispatch({
      type: EDIT_TODO,
      payload: { id, title },
    });
  };

  const removeTodo = (id) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });
  };

  const completeTodo = (id) => {
    dispatch({
      type: COMPLETE_TODO,
      payload: id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        editTodo,
        removeTodo,
        completeTodo,
        todos: state.todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
