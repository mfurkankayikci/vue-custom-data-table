export default {
  getTableItems(state) {
    return state.todos.map((todo) => ({
      ...todo,
      user: state.users.length && state.users.find((user) => user.id === todo.userId).name,
      completed: {
        value: todo.completed,
        text: todo.completed ? 'Done' : 'In Progress',
      },
    }));
  },
};
