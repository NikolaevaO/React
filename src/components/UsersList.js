import React from "react";
import { connect } from 'react-redux';
import User from "./User";

class UsersList extends React.Component {
  render () {
    if(!this.props.users) {
      return null;
    }
    const users = this.props.users.map(user => {
      return <User key={user.id} {...user}/>
    })

    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  };
}

export default connect(mapStateToProps)(UsersList);