import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DisplayTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { deleteTodo, toggleCompleted } from "../features/todo/todoSlice";

function DisplayTodo() {
  const todos = useSelector((state) => state.todo.value);
  const [isCompleted, setIsCompleted] = useState(false);

  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheckboxChange = (id) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className="todo-list-container">
      <h3>Available Todos</h3>
      {todos.length === 0 ? (
        <p className="no-todos">No todos available.</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? "completed" : ""}>
              {todo.text}
              <span className="todo-actions">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteTodoHandler(todo.id)}
                />
                <input
                  type="checkbox"
                  checked={!!todo.completed} // forces undefined → false
                  onChange={() => handleCheckboxChange(todo.id)}
                />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayTodo;
