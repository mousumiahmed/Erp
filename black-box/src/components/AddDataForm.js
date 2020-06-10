import React from "react";
import axios from "axios";

export default class AddDataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total_question: 0, comp_question: 0, day: "" };
  }

  addData = () => {
    const obj = {
      total_question: this.state.total_question,
      comp_question: this.state.comp_question,
      day: this.state.day
    };
    axios({
      method: "post",
      url: `http://localhost:5000/add/data/${this.props.match.params.id}`,
      data: obj
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          // name: response.data.name,
          // designation: response.data.designation,
        });
      })
      .catch(err => alert(err));
  };
  Day = e => {
    this.setState({
      day: e.target.value
    });
  };
  Total_question = e => {
    this.setState({
      total_question: Number(e.target.value)
    });
  };
  Comp_question = e => {
    this.setState({
      comp_question: Number(e.target.value)
    });
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <React.Fragment>
        <div className="container mt-5 pt-5">
          <h2 className="text-center">Welcome!</h2>
          <form>
            <div class="form-group w-50">
              <input
                type="Number"
                name="total_question"
                value={this.state.total_question}
                onChange={this.Total_question}
                placeholder="Enter Total question"
                className="form-control m-2"
              ></input>
            </div>
            <div class="form-group w-50">
              <input
                type="Number"
                name="comp_question"
                value={this.state.comp_question}
                onChange={this.Comp_question}
                placeholder="Enter Total question"
                className="form-control m-2"
              ></input>
            </div>
            <div class="form-group w-50">
              <input
                type="date"
                name="day"
                className="form-control"
                value={this.state.day}
                onChange={this.Day}
              ></input>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.addData}
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
