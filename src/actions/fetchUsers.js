import axios from "axios";

export function fetchUsers() {
  return {
    type: "FETCH_USERS",
    payload: axios.get(`http://jsonplaceholder.typicode.com/users/`)
    .then(response => {
      return response.data;
    })
  }
}