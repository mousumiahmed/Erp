import React from "react";
import axios from "axios";

export default class PaymentTraker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "",
      date: "",
      arr: []
    };
  }
  Month = e => {
    this.setState({
      month: e.target.value
    });
  };
  componentDidMount = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/show/placed`
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          // name: response.data.name,
          // designation: response.data.designation,
          arr: [...response.data]
        });
      })
      .catch(err => alert(err));
  };
  render() {
    // var day = this.state.arr.map(item => {
    //   // console.log(item);
    //   var x = item.payment.map(e => {
    //     console.log(item);
    //     console.log(this.state.month);
    //     console.log(e.date.split("-")[1]);
    // if (this.state.month == Number(e.date.split("-")[1])) {
    var date_arr = [];
    for (var i = 0; i < this.state.arr.length; i++) {
      for (var j = 0; j < this.state.arr[i].payment.length; j++) {
        date_arr.push(this.state.arr[i].payment[j]);
      }
    }
    for (var i = 0; i < date_arr.length; i++) {
      console.log(date_arr[i]);
      // if (date_arr[i].includes("date")) {
      //   console.log("mil gya");
      // }
    }
    console.log(date_arr);

    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-7 text-center my-5">
            Payment Traker
            <span className="mx-2">
              <img
                src="payment.gif"
                style={{ height: "50px", width: "50px" }}
              />
            </span>
          </h1>
          <div className="jumbotron">
            <div>
              <form
                onSubmit={this.onSubmit}
                className="text-center"
                // style={{ backgroundColor: "#0A8275" }}
              >
                <select
                  id="aid"
                  name="month"
                  className="bg-secondary text-white"
                  style={{ fontSize: "20px" }}
                  onChange={this.Month}
                  value={this.state.month}
                >
                  <option value="select">Select Name of Month </option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </form>
            </div>
            <div className="mt-5 pt-5"></div>
            <table className="table table-striped text-light bg-dark ">
              <thead>
                <tr>
                  <th scope="col">St_Code</th>
                  <th scope="col">Name</th>
                  <th scope="col">Company_Name</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Total_Paid_Amount</th>
                  <th scope="col">Pending_Amount</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Photograph</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
