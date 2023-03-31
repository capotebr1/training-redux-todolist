import TODO from "./todoClass";
const TODOS_URL = "http://localhost:3000/todos";

export const getAll = async () => {
    const response = await fetch(TODOS_URL);
    return response.json();
};   

export const addTodo = async (todo) => {
    const response = await fetch(TODOS_URL , {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
          },
        cache: "default",
        body: JSON.stringify(todo)
    })
    return response;
}

export const deleteTodo = async (id) => {
    const response = await fetch(`${TODOS_URL}/${id}` , {
        method: "DELETE",
        mode: "cors",
        cache: "default",
        body: id
    })
    return response;
}

export const toggleTodo = async (id, name, date, completed) => {
    const newTodo = new TODO(id, name, date, !completed);
    const response = await fetch(`${TODOS_URL}/${id}` , {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
          },
        cache: "default",
        body: JSON.stringify(newTodo)
    })
    return response;
}