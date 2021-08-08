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
};
