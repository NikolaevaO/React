import React from "react";
import ReactDom from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {Provider} from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/styles.css";

import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Users from "./pages/Users";
import User from "./pages/User";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Comments from "./pages/Comments";
import Comment from "./pages/Comment";
import PageNotFound from "./pages/PageNotFound";

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Main} />
        <Route path="users" component={Users}>
          <Route path=":userId" component={User} />
        </Route>
        <Route path="posts" component={Posts}>
          <Route path=":id" component={Post} />
        </Route>
        <Route path="comments" component={Comments}>
          <Route path=":id" component={Comment} />
        </Route>
        {/* всегда * указывать в посл.очередь */}
        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
