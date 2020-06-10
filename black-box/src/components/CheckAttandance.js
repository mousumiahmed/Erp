import React from "react";
import axios from "axios";

export default class CheckAttendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      allBatch: ""
    };
  }

  batchName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/show/current`
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          arr: [...response.data]
        });
      })
      .catch(err => alert(err));
  };
  render() {
    var batch = this.state.arr.filter(item => {
      return this.state.allBatch == item.batch;
    });
    console.log(batch);
    return (
      <React.Fragment>
        <div className="container">
          <select
            id="aid"
            name="allBatch"
            className="bg-secondary offset-4 text-white"
            style={{ fontSize: "20px" }}
            onChange={this.batchName}
            value={this.state.allBatch}
          >
            <option value="select">Select Batch </option>
            <option value="Vikings">Vikings</option>
            <option value="Spartans">Spartans</option>
            <option value="Samurai">Samurai</option>
          </select>

          {batch.length == "" ? (
            <div>
              <div className="row mt-5 pt-5">
                {this.state.arr.map(item => {
                  return (
                    <React.Fragment>
                      <div className="col-lg-4">
                        <div className="card mt-3">
                          <div className="card-body">
                            {item.attendence.map(e => {
                              return (
                                <React.Fragment>
                                  <img
                                    src={e.url}
                                    style={{ height: "200px", width: "200px" }}
                                  />
                                  <h4>Time of Attendence: {e.date}</h4>
                                </React.Fragment>
                              );
                            })}
                          </div>
                          <h3 className="text-center">Name: {item.name}</h3>
                          <h3 className="text-center">Batch: {item.batch}</h3>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <div className="row mt-5 pt-5">
                {batch.map(item => {
                  return (
                    <React.Fragment>
                      <div className="col-lg-4">
                        <div className="card mt-3">
                          <div className="card-body">
                            {item.attendence.map(e => {
                              return (
                                <React.Fragment>
                                  <img
                                    src={e.url}
                                    style={{ height: "200px", width: "200px" }}
                                  />
                                  <h4>Time of Attendence: {e.date}</h4>
                                </React.Fragment>
                              );
                            })}
                          </div>
                          <h3 className="text-center">Name: {item.name}</h3>
                          <h3 className="text-center">Batch: {item.batch}</h3>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
