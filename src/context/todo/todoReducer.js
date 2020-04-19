import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, EDIT_TODO } from "../types";
function setTodosToLocalstorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
const handlers = {
  [ADD_TODO]: (state, { payload }) => {
    let todos = [...state.todos, payload];
    setTodosToLocalstorage(todos);
    return {
      todos,
    };
  },
  [REMOVE_TODO]: (state, { payload }) => {
    let todos = state.todos.filter((todo) => todo.id !== payload);
    setTodosToLocalstorage(todos);
    return {
      todos,
    };
  },
  [COMPLETE_TODO]: (state, { payload }) => {
    let todos = state.todos.map((todo) => {
      if (todo.id === payload) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodosToLocalstorage(todos);
    return {
      todos,
    };
  },
  [EDIT_TODO]: (state, { payload }) => {
    let todos = state.todos.map((todo) => {
      if (todo.id === payload.id) {
        return { ...todo, title: payload.title };
      }
      return todo;
    });
    setTodosToLocalstorage(todos);
    return {
      todos,
    };
  },
  DEFAULT: (state) => state,
};

export const todoReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
