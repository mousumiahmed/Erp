import React from "react";
import { Link } from "react-router-dom";
var FontAwesome = require("react-fontawesome");

export default class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currdate: ""
    };
  }

  takeAttendence = () => {
    this.setState({ currdate: Date.now() });
    console.log(Date.now());
  };

  render() {
    console.log(this.props.id);
    return (
      <React.Fragment>
        <Link to={`/camera/${this.props.id}`}>
          <button
            className="m-5 btn btn-secondary"
            onClick={this.takeAttendence}
          >
            Take Attendence
          </button>
        </Link>
        <div>
          <p>{this.state.currdate}</p>
        </div>
      </React.Fragment>
    );
  }
}
