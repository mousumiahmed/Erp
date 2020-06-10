import React from "react";
import styles from "./MentorDeshboard.css";
import $ from "jquery";
import icons from "glyphicons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PaymentTraker from "./PaymentTraker";
import CheckAttendance from "./CheckAttandance.js";
import Attendance from "./Attendance";
import CurrStudent from "./CurrStudent.js";
import axios from "axios";

export default class MentorDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      designation: "",
      trackerBtn: false,
      attendenceBtn: true,
      currbtn: false
    };
  }
  tracker = () => {
    this.setState({ trackerBtn: true, attendenceBtn: false, currbtn: false });
  };

  attendence = () => {
    this.setState({ attendenceBtn: true, trackerBtn: false, currbtn: false });
  };

  currentStudent = () => {
    this.setState({ currbtn: true, attendenceBtn: false, trackerBtn: false });
  };
  componentDidMount() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    $("#menu-toggle-2").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled-2");
      $("#menu ul").hide();
    });

    function initMenu() {
      $("#menu ul").hide();
      $("#menu ul")
        .children(".current")
        .parent()
        .show();
      $("#menu li a").click(function() {
        var checkElement = $(this).next();
        if (checkElement.is("ul") && checkElement.is(":visible")) {
          return false;
        }
        if (checkElement.is("ul") && !checkElement.is(":visible")) {
          $("#menu ul:visible").slideUp("normal");
          checkElement.slideDown("normal");
          return false;
        }
      });
    }
    $(document).ready(function() {
      initMenu();
    });
    axios({
      method: "get",
      url: `http://localhost:5000/dashboard/mentor/${this.props.match.params.id}`
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          name: response.data.name,
          designation: response.data.designation,
          btn: true
        });
      })
      .catch(err => alert(err));
  }
  render() {
    let name = this.state.name.split(" ");
    let first = name[0];
    let char_arr = first.split("");
    let char1 = char_arr[0];
    console.log(char1);
    return (
      <React.Fragment>
        <div id="wrapper">
          <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
              <div className="ml-1">
                <h2>{this.state.name}</h2>
                <h4 className="text-white">{this.state.designation}</h4>
              </div>
            </div>
            <hr></hr>
            <ul
              class="sidebar-nav nav-pills nav-stacked "
              style={{ marginTop: "50%" }}
              id="menu"
            >
              <li
                onClick={this.attendence}
                className="mt-5 text-white "
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                <i class="fa fa-check">Check Attendence</i>
              </li>
              <li
                onClick={this.tracker}
                className="mt-5 text-white "
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                <i class="fa fa-check">Payment Tracker</i>
              </li>
              <li
                onClick={this.currentStudent}
                className="mt-5 text-white"
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                <i class="fa fa-check">Current Students</i>
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
                {this.state.trackerBtn ? <PaymentTraker /> : null}
                {this.state.attendenceBtn ? <CheckAttendance /> : null}
                {this.state.currbtn ? <CurrStudent /> : null}
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
