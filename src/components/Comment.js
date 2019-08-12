import React from "react";
import {Link} from "react-router";

export default class Comment extends React.Component {
  render () {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">

          <Link to={`/comments/${this.props.id}`}>
            {this.props.name}
          </Link>
        </div>

        <div className="card-body text-secondary">
          <p>RE:&nbsp;
            <Link to={`/posts/${this.props.postId}`}>
              {this.props.title}
            </Link>
          </p>
          <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}