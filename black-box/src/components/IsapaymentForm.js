import React from "react";
import style from "./IsapaymentForm.css";
import axios from "axios";

export default class IsapaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      image: ""
    };
  }

  uploadImage = e => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = ev => {
      this.setState({
        image: ev.target.result
      });
    };
  };

  amount = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const data = {
      amount: this.state.amount,
      date: new Date(),
      image: this.state.image
    };
    axios({
      method: "post",
      url: `http://localhost:5000/edit/isa/${this.props.id}`,
      data: data
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => alert(err));
  };

  render() {
    console.log(this.state.image);
    var curr = new Date();

    return (
      <React.Fragment>
        <div className="page-wrapper bg-red p-t-100 p-b-100 font-robo">
          <div className="wrapper wrapper--w960">
            <div className="card card-2">
              <div className="card-heading"></div>
              <div className="card-body">
                <h3 className="title">Fill Your ISA payment details !</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="input-group">
                    <input
                      className="input"
                      type="text"
                      placeholder="amount"
                      name="amount"
                      value={this.state.amount}
                      onChange={this.amount}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="text"
                      name="day"
                      className="form-control"
                      value={new Date()}
                    ></input>
                  </div>

                  <div className="input-group">
                    <input
                      type="file"
                      name="file"
                      onChange={e => this.uploadImage(e)}
                    />
                  </div>
                  <button
                    onClick={this.onSubmit}
                    className="btn btn-secondary btn-outline-info"
                  >
                    Add
                  </button>
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
