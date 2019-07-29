import React from "react";
import ReactDom from "react-dom";
import Menu from "./Menu";
import Login from "./Login";

import "./styles.css";

class App extends React.Component {
  render() {
    const menuItems = [
      { title: "Главная", href: "/"},
      { title: "О нас", href: "/about"},
      { title: "Услуги", href: "/service"},
      { title: "Контакты", href: "/contacts"}
    ];
    return (
      <div>
        <h1>Первое приложение на React</h1>
        <Menu items={menuItems} titleMenu="Основное меню"/>
        <Login />
      </div>
    )
  }
};

ReactDom.render(<App/>, document.querySelector("#root"));
