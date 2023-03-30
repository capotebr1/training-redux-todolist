import React, { useRef } from 'react';
import TODO from '../todoClass';

const TodoForm = ({ addTodo }) => {

    const todoName = useRef();
    const todoDate = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const id = Math.round( Math.random() * 10000 );
        const newTodo = new TODO(id, todoName.current.value, todoDate.current.value, false );
        addTodo(newTodo);
        todoName.current.value = "";
        todoDate.current.value = "";
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder='Add todo name'
                    required
                    ref={todoName}
                />
                <div>
                    <label htmlFor="">Date:</label>
                    <input type="date"
                        required
                        ref={todoDate}
                    />
                </div>
                <button type='submit'>Submit Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;
