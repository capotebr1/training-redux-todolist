import { useState, useEffect } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { useSelector , useDispatch } from "react-redux";
import { getAll } from "./services";

function App() {
  const selectTodos = (state) => state;
  const dispatch = useDispatch();

  useEffect(() => {
    getAll().
    then(todos => dispatch({ type: "todos/init" , payload: todos }));
  }, [dispatch]);

  const todos = useSelector(selectTodos);
  
  const ShowTodos = () => {

    if (todos.length > 0) {
      return todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          date={todo.date}
          completed={todo.completed}
        ></Todo>
      ));
    } else {
      return <h2>No Todos added yet</h2>;
    }
  };

  return (
    <div className="App">
      <h1>Track-List</h1>
      <TodoForm />
      <div className="todos">
        <ShowTodos />
      </div>
    </div>
  );
}

export default App;
