import React, { Component } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Takephoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      time: ""
    };
  }
  onTakePhoto(dataUri) {
    // console.log("takePhoto");
    this.setState({ url: dataUri, time: new Date() });
  }
  logout = () => {
    const obj = {
      date: this.state.time,
      url: this.state.url
    };
    axios({
      method: "post",
      url: `http://localhost:5000/camera/${this.props.match.params.id}`,
      data: obj
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => alert(err));
  };

  render() {
    console.log(this.state.url);
    console.log(this.props.match.params.id);
    return (
      <div>
        <Camera
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri);
          }}
        />
        <Link to="/login">
          <button
            type="button"
            onClick={this.logout}
            className="btn btn-danger"
          >
            Logout
          </button>
        </Link>
      </div>
    );
  }
}
