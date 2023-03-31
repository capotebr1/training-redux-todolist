import React, { useRef } from "react";
import TODO from "../todoClass";
const selectTodos = (state) => state.todos;
import { addTodo } from "../services";
import { useDispatch, useSelector } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todoName = useRef();
  const todoDate = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      
      name: todoName.current.value,
      date: todoDate.current.value,
      completed: false,
    }

    addTodo(newTodo);

    dispatch({ type: "todos/addTodo", payload: newTodo });
    todoName.current.value = "";
    todoDate.current.value = "";
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo name"
          required
          ref={todoName}
        />
        <div>
          <label htmlFor="">Date:</label>
          <input type="date" required ref={todoDate} />
        </div>
        <button type="submit">Submit Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
