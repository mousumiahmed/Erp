

import React from 'react';

import axios from 'axios';

​

​

​

export default class CurrStudent extends React.Component{

    constructor(props){

        super(props);

        this.state={

            total_question:"",

            comp_question:"",

            day:"",

            arr:[]

​

        }

    }

    componentDidMount=()=>{

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

          

    }

    Day=(e) => {

        this.setState({

            day : e.target.value

    

        });

      }

      Total_question=(e)=>{

          this.setState({

              total_question:Number(e.target.value)

          })

      }

      Comp_question=(e)=>{

          this.setState({

              comp_question:Number(e.target.value)

          })

      }

      onSubmit=(e)=> {

        e.preventDefault();        

        const data={day:this.state.day,total_question:this.state.total_question,comp_question:this.state.comp_question}

        console.log(data);

        //console.log(this.state.date)

        

        // axios.get(`http://localhost:5000`,)

        // .then(res => {

        //   console.log(res);

        // })

    //     this.setState({

    //         date: ''

    

    //   })

    }

    render(){

        console.log(this.state.arr);

        console.log(this.state.day);

        return(

            <div>

                {this.state.arr.map((val,index)=>{

                    return(

                        <div className="container">

                            <div class="row ml-5">

                            <div className="card m-2 bg-info" style={{width: "18rem"}}>

                            <div class="card-body">

                                <h5 class="card-title">{val.name}</h5>

                                <p class="card-text">{val.batch}</p>

                                <p class="card-text">{val.student_code}</p>

                                {/* <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"

                                aria-hidden="true">

                                <div class="modal-dialog" role="document">

                                    <div class="modal-content">

                                    <div class="modal-header text-center">

                                        <h4 class="modal-title w-100 font-weight-bold">Enter Student data</h4>

                                    </div>

                                    <div class="modal-body mx-3">

                                        <div class="md-form mb-1">

                                        <input type="Number" name="total_question" value={this.state.total_question} onChange={this.Total_question} class="form-control"></input>

                                        <label data-error="wrong" data-success="right">Total No of question</label>

                                        </div>

​

                                        <div className="md-form mb-1">

                                        <input type="Number" name="comp_question" value={this.state.comp_question} onChange={this.Comp_question}class="form-control"></input>

                                        <label data-error="wrong" data-success="right" for="defaultForm-pass">Total No of problem solved</label>

                                        </div>

                                        <label >Enter Date</label>

                                    <input type="date" name="day" className="form-control"value={this.state.day} onChange={this.Day}></input>

                                    

​

                                    </div>

                                    <div class="modal-footer d-flex justify-content-center">

                                        <button class="btn btn-primary" onClick={this.onSubmit}>Submit</button>

                                    </div>

                                    </div>

                                </div>

                                </div>

​

                                <div class="text-center">

                                <a href="" class="btn btn-secondary btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Enter Data</a>

                                </div> */}

​

                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">

                                Click to submit data

                                </button>

​

                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                                <div class="modal-dialog" role="document">

                                    <div class="modal-content">

                                    <div class="modal-header">

                                        <h5 class="modal-title" id="exampleModalLabel">Fill Details !</h5>

                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">

                                        <span aria-hidden="true">&times;</span>

                                        </button>

                                    </div>

                                    <div class="modal-body">

                                    <input type="Number" name="total_question" value={this.state.total_question} onChange={this.Total_question} placeholder="Enter Total question" className="form-control m-2"></input>

                                    <input type="Number" name="comp_question" value={this.state.comp_question} onChange={this.Comp_question}placeholder="Enter Total question" className="form-control m-2"></input>

                                    <input type="date" name="day" className="form-control"value={this.state.day} onChange={this.Day}></input>

                                    </div>

                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                                        <button type="button" class="btn btn-primary"onClick={this.onSubmit}>Submit</button>

                                    </div>

                                    </div>

                                </div>

                                </div>

​

​

                                

                            </div>

                            </div>

​

                            </div>                          

                        </div>

                    )

                    })}

​

                    

                   

                

            </div>

            

        )

    }

}

