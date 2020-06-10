import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">
              <img src="logo.svg"></img>
            </a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <Link to="/login">
                <button
                  class="btn btn-outline-danger my-2 my-sm-0"
                  type="submit"
                >
                  Login
                </button>
              </Link>
            </form>
          </div>
        </nav>
        <div className="m-4">
          <div
            className="jumbotron"
            style={{ background: "url(banner_1.jpg)" }}
          >
            <div className="mt-5">
              <h1
                className="text-light offset-5 mt-5"
                style={{ fontSize: "70px" }}
              >
                We are<br></br>
                Watching your Every Move!
              </h1>
              <h1
                className="text-light offset-5 mt-5"
                style={{ fontSize: "50px" }}
              >
                Black-Box Of Masai School
              </h1>
            </div>
          </div>
          <div className="jumbotron-fluid">
            <h1>We are Handling</h1>
            <div className="row">
              <div className="col-4 mt-5">
                <img
                  src="vikings.png"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%"
                  }}
                ></img>
                <h1>Vikings</h1>
              </div>
              <div className="col-4 mt-5">
                <img
                  src="spartan.png"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%"
                  }}
                ></img>
                <h1>Spartans</h1>
              </div>
              <div className="col-4 mt-5">
                <img
                  src="samurai.png"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%"
                  }}
                ></img>
                <h1>Samurai</h1>
              </div>
            </div>
          </div>
          <div className="jumbotron-fluid text-light mt-5 gradient">
            <h1>Update Yourself</h1>
            <div className="row">
              <div className="col-4">
                <h1>Recent Activity</h1>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <p className="mt-5">
                    On 21st Oct 2019 third batch of Masai started
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                </div>
              </div>
              <div className="col-4">
                <h1>Placement</h1>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <p className="mt-5">
                    On 21st Oct 2019 third batch of Masai started
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                </div>
              </div>
              <div className="col-4">
                <h1>Course Related</h1>
                <div
                  className="card"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <p className="mt-5">
                    On 21st Oct 2019 third batch of Masai started
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                  <p>
                    Spartans Completed There End To End Front End Project on
                    21st oct 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="mt-5">Performer of the Week</h1>
          <div className="row mt-5">
            <div className="col-4">
              <h2>From Vikings</h2>
              <img
                src="spartan.png"
                style={{ height: "200px", width: "200px" }}
              ></img>
              <h3>Name</h3>
            </div>
            <div className="col-4">
              <h2>From Spartans</h2>
              <img
                src="spartan.png"
                style={{ height: "200px", width: "200px" }}
              ></img>
              <h3>Name</h3>
            </div>
            <div className="col-4">
              <h2>From Samurai</h2>
              <img
                src="spartan.png"
                style={{ height: "200px", width: "200px" }}
              ></img>
              <h3>Name</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
