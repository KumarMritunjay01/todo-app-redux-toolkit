import React from "react";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  return (
    <>
      <AddTodo />
      <br /> <br />
      <hr />
      <DisplayTodo />
    </>
  );
}

export default App;
