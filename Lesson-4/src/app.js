import React from "react";
import ReactDom from "react-dom";


import Blog from "./components/Blog";
import WelcomeModal from "./components/WelcomeModal";

import "./styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>DZ-4</h1>
        <WelcomeModal />
        <Blog />
      </div>
    )
  }
};

ReactDom.render(<App />, document.querySelector("#root"));
