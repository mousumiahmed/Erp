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
    var test = "";
    var day = this.state.arr.map(item => {
      // console.log(item);
      var x = item.payment.map(e => {
        console.log(item);
        console.log(this.state.month);
        console.log(e.date.split("-")[1]);

        if (this.state.month == Number(e.date.split("-")[1])) {
          console.log("hey this is called");
          test = (
            <React.Fragment>
              {/* {console.log(item.name)} */}
              {/* <h1>{item.name}</h1> */}

              <table className="table table-striped text-light bg-dark">
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
                  {this.state.arr.map(items => {
                    return (
                      <tr>
                        <th scope="row">{items.student_code}</th>
                        <td>{items.name}</td>
                        <td>{items.company}</td>
                        <td>{items.designation}</td>
                        <td>{items.total}</td>
                        <td>{300000 - items.total}</td>
                        {items.payment.map(event => {
                          return (
                            <React.Fragment>
                              <td>{event.date}</td>
                              <td>{event.amount}</td>
                              <td>
                                <img
                                  src={event.image}
                                  style={{ height: "100px", width: "100px" }}
                                />
                              </td>
                            </React.Fragment>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </React.Fragment>
          );
        }
      });
      console.log(x);
    });

    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="display-7 text-center my-5">
            Payment Traker
            <span className="mx-2"></span>
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
            {test ? test : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
