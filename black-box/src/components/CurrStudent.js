import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CurrStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }
  componentDidMount = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/show/current`
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
    console.log(this.state.arr);
    return (
      <div>
        <div className="jumbotron" style={{ height: "1000px" }}>
          <div class="row ml-5">
            {this.state.arr.map((val, index) => {
              return (
                <div className="col-lg-4">
                  <div className="card m-2 bg-info" style={{ width: "18rem" }}>
                    <div class="card-body">
                      <Link to={`/show/performance/${val._id.$oid}`}>
                        <h3 class="card-title text-white">{val.name}</h3>
                      </Link>
                      <p class="card-text text-white">{val.batch}</p>
                      <p class="card-text text-white">{val.student_code}</p>

                      <Link to={`/add/data/${val._id.$oid}`}>
                        <button
                          type="button"
                          class="btn btn-primary"
                          id={val._id.$oid}
                        >
                          Click to submit data
                        </button>
                      </Link>

                      {/* <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Fill Details !
                              </h5>
                              <p>{val.name}</p>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <input
                                type="Number"
                                name="total_question"
                                value={this.state.total_question}
                                onChange={this.Total_question}
                                placeholder="Enter Total question"
                                className="form-control m-2"
                              ></input>
                              <input
                                type="Number"
                                name="comp_question"
                                value={this.state.comp_question}
                                onChange={this.Comp_question}
                                placeholder="Enter Total question"
                                className="form-control m-2"
                              ></input>
                              <input
                                type="date"
                                name="day"
                                className="form-control"
                                value={this.state.day}
                                onChange={this.Day}
                              ></input>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                id={val._id.$oid}
                                class="btn btn-primary"
                                onClick={this.onSubmit}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
