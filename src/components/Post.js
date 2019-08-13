import React from "react";
import {Link} from "react-router";

export default class Post extends React.Component {
  render () {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">

          <Link to={`/posts/${this.props.id}`}>
            {this.props.title}
          </Link>
        </div>

        <div className="card-body text-secondary row">
          <div className="col-2">
            <div className="avatar">
              {this.props.username[0]}
            </div>
            <p className="userName">
              <Link to={`/users/${this.props.userId}`}>
                {this.props.username}
              </Link>
            </p>
          </div>
          <div className="col-10">
            <p>{this.props.title}</p>
            <p>{this.props.body}</p>
          </div>
        </div>
      </div>
    )
  }
}