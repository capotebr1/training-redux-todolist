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
    return response.json();
};

export const deleteTodo = async (id) => {
    const response = await fetch(`${TODOS_URL}/${id}` , {
        method: "DELETE",
        mode: "cors",
        cache: "default",
    });
    return response.json();
};

export const toggleTodo = async (name, date, completed, id) => {
    const response = await fetch(`${TODOS_URL}/${id}` , {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            name: name,
            date: date,
            completed: !completed,
            id: id
        })
    })
    return response.json();
};