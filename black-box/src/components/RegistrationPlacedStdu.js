import React from "react";
import style from "./RegistrationPlacedStdu.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default class RegistrationPlacedStdu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      student_code: "",
      batch: "",
      company: "",
      designation: "",
      mobile: "",
      email: "",
      password: ""
    };
  }
  get_details = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      student_code: this.state.student_code,
      batch: this.state.batch,
      company: this.state.company,
      designation: this.state.designation,
      mobile: this.state.mobile,
      email: this.state.email,
      password: this.state.password
    };

    axios({
      method: "post",
      url: `http://localhost:5000/register/placed`,
      data: data
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => alert(err));
  };
  render() {
    return (
      <React.Fragment>
        <div className="page-wrapper bg-red p-t-100 p-b-100 font-robo">
          <h3 className="title text-center">Placed Student Registration</h3>
          <div className="wrapper wrapper--w960">
            <div className="card card-2">
              <div className="card-heading"></div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="input-group">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter Your Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.get_details}
                    ></input>
                  </div>
                  <div className="input-group">
                    <input
                      className="input"
                      type="text"
                      placeholder="Student_code eg:vk_001"
                      name="student_code"
                      value={this.state.student_code}
                      onChange={this.get_details}
                    ></input>
                  </div>
                  <div className="input-group">
                    <input
                      className="input"
                      type="text"
                      placeholder="Batch_Name"
                      name="batch"
                      value={this.state.batch}
                      onChange={this.get_details}
                    ></input>
                  </div>
                  <div className="input-group">
                    <input
                      className="input"
                      type="text"
                      placeholder="Ph_no"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.get_details}
                    ></input>
                  </div>
                  <div className="input-group">
                    <input
                      className="input"
                      type="text"
                      placeholder="Company Name"
                      name="company"
                      value={this.state.company}
                      onChange={this.get_details}
                    ></input>
                  </div>
                  <div className="input-group">
                    <input
                      className="input"
                      type="text"
                      placeholder="Designation"
                      name="designation"
                      value={this.state.designation}
                      onChange={this.get_details}
                    ></input>
                  </div>
                  <div className="input-group">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.get_details}
                    ></input>
                  </div>
                  <div className="input-group">
                    <input
                      className="input"
                      type="password"
                      placeholder="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.get_details}
                    ></input>
                  </div>
                  <Link to="/login">
                    <button className="btn btn-secondary btn-outline-info">
                      Register
                    </button>
                  </Link>
                  {/* <p className="mt-5"><a href="#">Back to login</a></p> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
