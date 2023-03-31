import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo , toggleTodo } from "../services";
const Todo = ({ id, name, date, completed }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="todo-container"
      style={
        completed
          ? {
              borderColor: "rgba(196, 255, 186, 1)",
              backgroundColor: "rgba(196, 255, 186, 0.5)",
            }
          : { borderColor: "gray" }
      }
    >
      <h2>{name}</h2>
      <div className="todo-options">
        <h3>{date}</h3>
        <button
          onClick={() =>{
            toggleTodo(id, name, date, completed);
            dispatch({ type: "todos/toggleTodo", payload: { id: id } });
          }
          }
          >
          Toggle
        </button>
        <button
          onClick={() =>{
            deleteTodo(id, completed);
            dispatch({ type: "todos/removeTodo", payload: { id: id } })
          }
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
