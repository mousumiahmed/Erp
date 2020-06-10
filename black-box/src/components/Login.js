import React from "react";
import style from "./Login.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import CurrDashboard from "./CurrDashboard";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: "",
      ar: [],
      btn: "",
      id: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  get_details = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  status = e => {
    this.setState({
      status: e.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      status: this.state.status
    };

    axios({
      method: "post",
      url: `http://localhost:5000/auth/login`,
      data: data
    })
      .then(response => {
        console.log(response.data.id);
        if (response.data.id) {
          this.setState({ id: response.data.id.$oid, btn: true });
        } else {
          alert(response.data.message);
        }
      })
      .catch(err => alert(err));
  }
  render() {
    // console.log(this.state.status);
    //console.log(this.state.name);
    if (this.state.id !== "") {
      return (
        <Redirect to={`/dashboard/${this.state.status}/${this.state.id}`} />
      );
    }
    return (
      <React.Fragment>
        <div className="bg">
          <div className="login-page">
            <div className="form">
              <form className="login-form">
                <input
                  type="email"
                  placeholder="email id"
                  name="email"
                  value={this.state.name}
                  onChange={this.get_details}
                />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.get_details}
                />
                <select
                  id="aid"
                  name="status"
                  onChange={this.status}
                  value={this.state.status}
                >
                  <option>Select Your Designation </option>
                  <option value="mentor">Mentor</option>
                  <option value="current">Current Student</option>
                  <option value="placed">Placed Student</option>
                </select>

                <button type="button" onClick={this.onSubmit}>
                  login
                </button>

                <p className="message">
                  Not registered?
                  <Link to="/allregister">
                    <small href="#">Create an account</small>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
