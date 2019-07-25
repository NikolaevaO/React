import React from "react";
import ReactDom from "react-dom";

import {Developer} from "./developer";

class App extends React.Component {
  render() {
    let developer = new Developer("Оксана", 18);
    return <div>
      <h1>Первое приложение на React</h1>
      <p>Привет, я {developer.name}, мне всегда {developer.age} :)</p>
    </div>
  }
};

ReactDom.render(<App/>, document.querySelector("#root"));
