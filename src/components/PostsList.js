import React from "react";
import { connect } from 'react-redux';
import Post from "./Post";

class PostsList extends React.Component {
  render () {
    if(!this.props.posts) {
      return null;
    }
    const posts = this.props.posts.map(post => {
      post.username = this.props.users.find(user => user.id == post.userId).username;
      return <Post key={post.id} {...post} />
    });
    
    return (
      <div>
        <h1>Посты</h1>
        {posts}
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

export default connect(mapStateToProps)(PostsList);