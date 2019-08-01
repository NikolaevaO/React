import React from "react";

export default class WelcomeModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: true
    }
  }

  render() {
    if (this.state.modal) {
      return (
        <div className="modal">
          <h2>Welcome to the blog!</h2>
          <button onClick={() => {
            this.setState({ modal: false })
          }}>close</button>
        </div>
      )
    } else {
      return null;
    }
  };

  componentDidMount() {
    this.setState({ modal: true })
  }
}