import React from "react";
import Home from "./Home";
import Login from "./Login";
import Allregister from "./Allregister";
import MentorRegistration from "./MentorRegistration";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationCurrStdu from "./RegistrationCurrStdu";
import RegistrationPlacedStdu from "./RegistrationPlacedStdu";
import IsapaymentForm from "./IsapaymentForm";
import MentorDashboard from "./MentorDashboard";
import CurrDashboard from "./CurrDashboard";
import Dashboard from "./Dashboard";
import Takephoto from "./Takephoto";
import AddDataForm from "./AddDataForm";
import ShowPerformanceRecord from "./ShowPerformanceRecord";

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/allregister" component={Allregister} />
        <Route path="/mentor/register" component={MentorRegistration} />
        <Route path="/register/current" component={RegistrationCurrStdu} />
        <Route path="/register/placed" component={RegistrationPlacedStdu} />
        <Route path="/dashboard/mentor/:id" component={MentorDashboard} />
        <Route path="/dashboard/current/:id" component={CurrDashboard} />
        <Route path="/dashboard/placed/:id" component={Dashboard} />
        <Route path="/camera/:id" component={Takephoto} />
        <Route path="/dashboard/current/attendence" component={CurrDashboard} />
        <Route path="/add/data/:id" component={AddDataForm} />
        <Route path="/show/performance/:id" component={ShowPerformanceRecord} />

        {/* <Allregister/> */}
      </div>
    );
  }
}
