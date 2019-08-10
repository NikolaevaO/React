import React from "react";
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/fetchUsers';
import { fetchPosts } from '../actions/fetchPosts';
import { fetchComments } from '../actions/fetchComments';
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";

class Layout extends React.Component {
  // вставляем логотип на стр.
  constructor(props) {
    super(props);
    this.brand = "React blog!";
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive("/")}>
            Главная
          </MenuItem>
          <MenuItem href="/users" active={this.isActive("/users")}>
            Пользователи
          </MenuItem>
          <MenuItem href="/posts" active={this.isActive("/posts")}>
            Посты
          </MenuItem>
          <MenuItem href="/comments" active={this.isActive("/comments")}>
            Коментарии
          </MenuItem>
        </Menu>
        <div className="container"></div>
          <div className="row">
            <div className="col-12">
              {this.props.children}
            </div>
          </div>
          <footer className="card-footer">
            &copy; 2019
          </footer>
      </>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers());
    this.props.dispatch(fetchPosts());
    this.props.dispatch(fetchComments());
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
    posts: state.posts.posts,
    comments: state.comments.comments
  };
}

export default connect(mapStateToProps)(Layout);