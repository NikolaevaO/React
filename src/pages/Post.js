import React from "react";
import PostCompon from "../components/Post";
import Comment from "../components/Comment";
import { connect } from 'react-redux';

class Post extends React.Component {
  render () {
    let post = this.props.posts.find(post => post.id == this.props.params.id);
    let comments;
    if (post) {
      post.username = this.props.users.find(user => user.id == post.userId).username;
      comments = this.props.comments.filter(comment => comment.postId == post.id)
                                    .map(comment => {
                                      comment.title = this.props.posts.find(post => post.id == comment.postId).title;
                                      return <Comment key={comment.id} {...comment} />});
      console.log(comments);
    }
    return (
      <div>
        {post && <PostCompon {...post} />}
        <h4>Комментарии к посту:</h4>
        {comments}
      </div>
    )    
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
    posts: state.posts.posts,
    comments: state.comments.comments
  };
}

export default connect(mapStateToProps)(Post);