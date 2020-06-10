import React from "react";
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Attendance from "./Attendance.js";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class CurrDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      batch: "",
      st_code: "",
      phone: "",
      btn: true,
      attendanceBtn: false,
      url: "",
      perform: []
    };
  }
  performance = () => {
    this.setState({ performanceBtn: true, attendanceBtn: false });
  };
  logout = e => {
    this.setState({
      btn: false
    });
  };

  attendance = () => {
    this.setState({
      attendanceBtn: true,
      performanceBtn: false
    });
  };
  componentDidMount = () => {
    $("#sidebar-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    axios({
      method: "get",
      url: `http://localhost:5000/dashboard/current/${this.props.match.params.id}`
    })
      .then(response => {
        console.log(response.data.attendence[0].url);
        this.setState({
          name: response.data.name,
          batch: response.data.batch,
          st_code: response.data.student_code,
          phone: this.state.phone,
          btn: true,
          url: response.data.attendence[0].url,
          perform: [...response.data.performance]
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
    console.log(this.state.perform);
    return (
      <div>
        <div id="wrapper">
          <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
              <img src="logo.svg"></img>
            </div>
            <hr></hr>
            <ul class="sidebar-nav">
              <div className="ml-5">
                <h2>{this.state.name}</h2>
                <h5>{this.state.batch}</h5>
                <h5>{this.state.st_code}</h5>
              </div>

              <li
                onClick={this.attendance}
                className="ml-5 text-white"
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                <i class="fa fa-check">Attendance</i>
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
            <div className="jumbotron" style={{ height: "1000px" }}>
              <div class="row">
                <div class="col">
                  <h2 className="m-5">Hacker Rank Performance</h2>
                  <BarChart
                    width={500}
                    height={300}
                    data={this.state.perform}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total_ques" fill="#8884d8" />
                    <Bar dataKey="solved" fill="#82ca9d" />
                  </BarChart>

                  {this.state.attendanceBtn ? (
                    <Attendance id={this.props.match.params.id} />
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
