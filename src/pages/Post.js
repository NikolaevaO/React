import React from "react";
import PostCompon from "../components/Post";
import { connect } from 'react-redux';

class Post extends React.Component {
  render () {
    const post = this.props.posts.find(post => post.id == this.props.params.id);
    if (post) {
      post.username = this.props.users.find(user => user.id == post.userId).username;
    }
    return (
      <div>
        {post && <PostCompon {...post} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
    posts: state.posts.posts
  };
}

export default connect(mapStateToProps)(Post);