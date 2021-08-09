import axios from 'axios';

export default {
  fetchTodos({ commit }) {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(({ data }) => {
        commit('setTodos', data);
      });
  },
  fetchUsers({ commit }) {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        commit('setUsers', data);
      });
  },
  deleteTodo({ commit }, id) {
    return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        if (response.status === 200) {
          commit('deleteTodo', id);
        }
      });
  },
  updateTodo({ commit }, formData) {
    console.log(formData);

    return axios.patch(`https://jsonplaceholder.typicode.com/todos/${formData.id}`)
      .then((response) => {
        if (response.status === 200) {
          commit('updateTodo', formData);
        }
      });
  },
};
