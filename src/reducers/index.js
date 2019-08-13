import {combineReducers} from "redux";

import posts from "./postsReducer";
import users from "./userReducer";
import comments from "./commentsReducer";

export default combineReducers({
  posts: posts,
  users: users,
  comments: comments
})