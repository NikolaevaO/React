import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <form className="login">
        <input type="text" placeholder="Ваш логин"></input>
        <input type="password" placeholder="Ваш пароль"></input>
        <button type="submit">Войти</button>
      </form>
    )
  }
};

