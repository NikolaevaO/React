import React from "react";
import CommentCompon from "../components/Comment";
import { connect } from 'react-redux';

class Comment extends React.Component {
  render () {
    let comment = this.props.comments.find(comment => comment.id == this.props.params.id);
    if (comment) {
      comment.title = this.props.posts.find(post => post.id == comment.postId).title;
    }
    return (
      <div>
        {comment && <CommentCompon {...comment} />}
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

export default connect(mapStateToProps)(Comment);