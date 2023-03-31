import { useState, useEffect } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { useSelector , useDispatch } from "react-redux";
import { getAll } from "./services";
import { todoInit } from "./actions";

function App() {
  const selectTodos = (state) => state;
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    getAll().
    then(todos => dispatch( todoInit(todos) ));
  }, [dispatch]);

  const todos = useSelector(selectTodos);
  
  const handleClick = () => {
    setFilter( !filter );
  }

  const Todos = ({ todos }) => (
    todos.map((todo, index) => (
      <Todo
        key={index}
        id={todo.id}
        name={todo.name}
        date={todo.date}
        completed={todo.completed}
      ></Todo>
    ))
  );

  const ShowTodos = () => {
    if (todos.length > 0) {

      if(!filter){
        return <Todos todos={todos.filter( todo => todo.completed )} ></Todos>
      }
      return <Todos todos={todos} ></Todos>
      
    } 
    else {
      return <h2>No Todos added yet...</h2>;
    }
  };

  return (
    <div className="App">
      <h1>Track-List</h1>
      <TodoForm />
      <div className="todos">
        <ShowTodos />
        <button onClick={handleClick} > { filter ? "Show Completed" : "Show All"  } </button>
      </div>
    </div>
  );
}

export default App;
