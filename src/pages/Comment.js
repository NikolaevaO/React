import React from "react";
import axios from "axios";
import CommentCompon from "../components/Comment";

export default class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: null
    }
  }

  render () {
    return (
      <div>
        {this.state.comment && <CommentCompon {...this.state.comment} />}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.id}`)
    .then(response => {
      this.setState({ comment: response.data });
    })
  }
}