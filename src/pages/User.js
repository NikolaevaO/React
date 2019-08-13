import React from "react";
import UserProfile from "../components/User";
import { connect } from 'react-redux';

class User extends React.Component {
  render () {
    let user = this.props.users.find(user => user.id == this.props.params.userId);
    return (
      <div>
        {user && <UserProfile {...user} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  };
}

export default connect(mapStateToProps)(User);