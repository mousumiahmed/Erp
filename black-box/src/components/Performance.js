import React from "react";
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

export default class Performance extends React.Component {
  constructor(props) {
    super(props);

    this.state = { arr: [] };
  }
  componentDidMount = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/show/performance/${this.props.match.params.id}`
    })
      .then(response => {
        console.log(response.data.performance);
        this.setState({
          // name: response.data.name,
          // designation: response.data.designation,
          arr: [...response.data.performance]
        });
      })
      .catch(err => alert(err));
  };
  render() {
    return (
      <React.Fragment>
        <BarChart
          width={500}
          height={300}
          data={this.state.arr}
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
      </React.Fragment>
    );
  }
}
