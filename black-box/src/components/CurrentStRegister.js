import React from 'react';
import style from './Currentst.css';

export default class CurrentStRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div>
            <div class="container cont">
    <h1 className="heading">Welcome Students! to Masai ERP</h1>
    <form action="" method="post">
    <div class="form-group">
        <label for="exampleInputEmail1">Name </label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Designation </label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Designation" />
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Ph No </label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="phone number" />
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">E-mail </label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
    </div>      
    <div class="form-group">
        <label for="exampleInputEmail1">Password </label>
        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
    </div>
        <div class="button">
            <button>SignUp</button>
        </div>
        <div class="button">
            <button>Login</button>
        </div>
    </form>
</div>
<footer>Black-Box!</footer>
        </div>
        )
    }
}