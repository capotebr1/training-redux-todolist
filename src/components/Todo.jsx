import React from 'react';

const Todo = ({ id, name, date, toggleTodo, removeTodo, completed }) => {
    return (
        <div className='todo-container' style={ completed ? { borderColor: "rgba(196, 255, 186, 1)", backgroundColor: "rgba(196, 255, 186, 0.5)" } : { borderColor: "gray" } }>
            <h2>{name}</h2>
            <div className='todo-options'>
                <h3>{date}</h3>
                <button onClick={() => toggleTodo(id)}>Toggle</button>
                <button onClick={() => removeTodo(id)}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;
