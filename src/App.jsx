import { useState } from 'react'
import './App.scss'
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import { createStore } from "redux"; 
function App() {
  const [todos, setTodos] = useState([]);
  
  const todosReducer = ( state = [], action ) => {
    switch(action.type){
      case "todos/addTodo":
        return 0;
      case "todos/removeTodo":
        return 0;
      case "todos/toggleTodo":
        return 0;
      default:
        return state;
    }
  }

  const store = createStore(todosReducer);

  const ShowTodos = () => {
    if(todos.length > 0){
      return(
        todos.map((todo) => <Todo 
        key={todo.id} 
        id={todo.id} git
        name={todo.name} 
        date={todo.date} 
        toggleTodo={toggleTodo} 
        removeTodo={removeTodo} 
        completed={todo.completed}
        >

        </Todo>)
      )
    }
    else{
      return(
        <h2>No Todos added yet</h2>
      )
    }
  }

  const addTodo = todo => {
    const updatedTodos = [ ...todos ];
    updatedTodos.push(todo);
    setTodos( updatedTodos );
  }

  const removeTodo = id => {
    const updatedTodos = todos.filter( todo => todo.id !== id );
    setTodos( updatedTodos );
  } 

  const toggleTodo = id => {
    const updatedTodos = todos.map( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
    setTodos( updatedTodos );
  }

  return (
    <div className="App">
      <h1>Track-List</h1>
      <TodoForm addTodo={addTodo}/>
      <div className='todos'>
        <ShowTodos/>
      </div>
    </div>
  )
}

export default App
