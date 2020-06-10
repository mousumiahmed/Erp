import React from "react";
import styles from "./Dashboard.css";
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IsapaymentForm from "./IsapaymentForm.js";
import axios from "axios";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      batch: "",
      company: "",
      phone: "",
      btn: true,
      formBtn: false
    };
  }

  form = () => {
    this.setState({ formBtn: true });
  };
  logout = () => {
    this.setState({
      btn: false
    });
  };
  componentDidMount = () => {
    $("#sidebar-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    axios({
      method: "get",
      url: `http://localhost:5000/dashboard/placed/${this.props.match.params.id}`
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          name: response.data.name,
          company: response.data.company_name,
          batch: response.data.batch,
          designation: response.data.designation,
          btn: true
        });
      })
      .catch(err => alert(err));
  };
  render() {
    let name = this.state.name.split(" ");
    let first = name[0];
    let char_arr = first.split("");
    let char1 = char_arr[0];
    console.log(char1);
    return (
      <div>
        <div id="wrapper">
          <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
              <img src="logo.svg"></img>
            </div>
            <hr></hr>
            <ul class="sidebar-nav">
              <div className="text-center">
                <h2>{this.state.name}</h2>
                <h5>Batch: {this.state.batch}</h5>
                <h5>Company: {this.state.company}</h5>
                <h5>Designation: {this.state.designation}</h5>
              </div>
              <li
                onClick={this.form}
                className="mt-5 text-white ml-5"
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                <i class="fa fa-check">Form</i>
              </li>
              <Link to="/login">
                <button
                  type="button"
                  onClick={this.logout}
                  className=" mt-5 ml-5 btn btn-danger"
                >
                  Logout
                </button>
              </Link>
            </ul>
          </aside>

          <div id="navbar-wrapper">
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a href="#" class="navbar-brand" id="sidebar-toggle">
                    <i class="fa fa-bars"></i>
                  </a>
                  <div
                    style={{ borderRadius: "50%", border: "1px solid black" }}
                    className="text-center bg-success"
                  >
                    {char1}
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <section id="content-wrapper">
            <div class="row">
              <div class="col">
                <h1 className="text-center">Welcome !</h1>
                {this.state.formBtn ? (
                  <IsapaymentForm id={this.props.match.params.id} />
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
