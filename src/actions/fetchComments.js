import axios from "axios";

export function fetchComments() {
  return function(dispatch) {
    dispatch({type: "FETCH_COMMENTS",
    payload: axios.get(`http://jsonplaceholder.typicode.com/comments/`)
    .then(response => {
      return response.data;
      })
    });
  }
}
