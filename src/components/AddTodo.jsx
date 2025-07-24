import React, { useState } from "react";
import { addtodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import "./AddTodo.css";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    dispatch(addtodo(newTodo));
    setInput("");
  };
  return (
    <div className="add-todo-container">
      <h2>Add Todos</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="add todos"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default AddTodo;
