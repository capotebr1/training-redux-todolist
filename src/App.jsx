import { useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { useSelector } from "react-redux";
function App() {
  const selectTodos = (state) => state;

  const ShowTodos = () => {
    const todos = useSelector(selectTodos);

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
