import React from "react";
import CommentList from "../components/CommentList";

export default class Coments extends React.Component {
  render () {
    return (
      <div>
        {
          (!this.props.children) ? (<CommentList />) : (this.props.children)
        }
      </div>
    )
  }
}