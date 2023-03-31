let initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/init":
      return action.payload;

    case "todos/addTodo":
      return [...state, action.payload];

    case "todos/toggleTodo":
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case "todos/removeTodo":
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todosReducer;
