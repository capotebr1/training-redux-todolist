import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo , toggleTodo } from "../services";
import { todoDeleted, todoToggled } from "../actions";
const Todo = ({ id, name, date, completed }) => {
  const dispatch = useDispatch();

  const handleToggleClick = async () => {
    const response = await toggleTodo(name, date, completed, id);
    console.log(response);
    dispatch( todoToggled(response) );
    return response;
  }

  const handleDeleteClick = async () => {
    const response = await deleteTodo(id);
    console.log(response);
    dispatch( todoDeleted(id) )
    return response;
  }

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
          onClick={handleToggleClick}
          >
          Toggle
        </button>
        <button
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
