import React from 'react';
import style from './RegistrationCurrStdu.css'
import axios from 'axios';


export default class MentorRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      designation: "",
      mobile: "",
      email: "",
      password: ""

    }
  }
  get_details=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      designation: this.state.designation,
      mobile: this.state.mobile,
      email: this.state.email,
      password: this.state.password
    }
    //console.log(this.state.name)

    axios({
      method: 'post',
      url: `http://localhost:5000/mentor/register`,
      data: data
    })

      .then((response) => {
        console.log(response.data)
        
          alert(response.data.message)
        
      })
      .catch((err) => alert(err))
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-wrapper bg-red p-t-100 p-b-100 font-robo">
          <div className="wrapper wrapper--w960">
            <div className="card card-2">
              <div className="card-heading"></div>
              <div className="card-body">
                <h3 className="title">Mentor Registration</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="input-group">
                    <input className="input" type="text" placeholder="Enter Your Name" name="name" value={this.state.name} onChange={this.get_details}></input>
                  </div>
                  <div className="input-group">
                    <input className="input" type="text" placeholder="Designation" name="designation" value={this.state.designation} onChange={this.get_details}></input>
                  </div>  
                  <div className="input-group">
                    <input className="input" type="tel"
                     placeholder="Ph_no" name="mobile" value={this.state.mobile} required maxLength="10" minLength
                     ="0" size="10" onChange={this.get_details}></input>
                  </div>
                  <div className="input-group">
                    <input className="input" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.get_details}></input>
                  </div>
                  <div className="input-group">
                    <input className="input" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.get_details}></input>
                  </div>
                  <button className="btn btn-secondary btn-outline-info">Register</button>
                  {/* <p className="mt-5"><a href="#">Back to login</a></p> */}

                </form>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}