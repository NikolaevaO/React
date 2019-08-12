import React from "react";
import Commment from "./Comment";
import { connect } from 'react-redux';

class CommentList extends React.Component {
  render () {
    if(!this.props.comments) {
      return null;
    }
    const comments = this.props.comments.map(comment => {
      comment.title = this.props.posts.find(post => post.id == comment.postId).title;
      return <Commment key={comment.id} {...comment} />
    })

    return (
      <div>
        <h1>Коментарии</h1>
        {comments}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    comments: state.comments.comments
  };
}

export default connect(mapStateToProps)(CommentList);