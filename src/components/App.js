import React from "react";
import { TodoList } from "./Todolist/Todolist";
import { Navbar } from "./Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <main className="container">
          <TodoList />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
