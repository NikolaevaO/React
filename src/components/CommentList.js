import React from "react";
import axios from "axios";
import Commment from "./Comment";

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  render () {
    if(!this.state.comments) {
      return null;
    }
    const comments = this.state.comments.map(comment => {
      return <Commment key={comment.id} {...comment} />
    })

    return (
      <div>
        <h1>Коментарии</h1>
        {comments}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/comments/`).then(response => {
      this.setState({ comments: response.data})
    })
  }
}