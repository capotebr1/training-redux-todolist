export const todoInit = todos => {
    return {
        type: "todos/init",
        payload: todos
    }
}

export const todoAdded = todo => {
    return{
        type: "todos/addTodo",
        payload: todo
    }
}

export const todoDeleted = id => {
    return{
        type: "todos/removeTodo",
        payload: { id: id }
    }
}

export const todoToggled = todo => {
    return{
        type: "todos/toggleTodo",
        payload: todo
    }
}