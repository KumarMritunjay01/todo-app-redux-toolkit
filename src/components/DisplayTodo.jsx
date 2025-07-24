import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DisplayTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { deleteTodo, toggleCompleted } from "../features/todo/todoSlice";

function DisplayTodo() {
  const todos = useSelector((state) => state.todo.value);
  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const filterTasks = todos.filter((task) => {
    if (filter === "completed") return task.completed === true;
    if (filter === "pending") return task.completed === false;
    return true;
  });

  const handleCheckboxChange = (id) => {
    dispatch(toggleCompleted(id));
  };
  return (
    <div className="todo-list-container">
      <div className="w-full h-14  flex justify-between items-center pl-2 pr-2 mb-5 text-xl font-semibold ">
        <button
          className="border-1 border-white w-1/5 h-2/3 cursor-pointer"
          onClick={() => setFilter("all")}
        >
          All Todos
        </button>
        <button
          className="border-1 border-white w-1/5 h-2/3 cursor-pointer"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className="border-1 border-white w-1/5 h-2/3 cursor-pointer"
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>
      {filterTasks.length === 0 ? (
        <p className="no-todos">No todos available.</p>
      ) : (
        <ul>
          {filterTasks.map((todo, index) => (
            <li key={index} className={todo.completed ? "completed" : ""}>
              {todo.text}
              <span className="todo-actions">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteTodoHandler(todo.id)}
                />
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={!!todo.completed}
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
