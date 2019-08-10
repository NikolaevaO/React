import axios from "axios";

export function fetchPosts() {
  return {
    type: "FETCH_POSTS",
    payload: axios.get(`http://jsonplaceholder.typicode.com/posts/`)
    .then(response => {
      return response.data;
    })
  }
}