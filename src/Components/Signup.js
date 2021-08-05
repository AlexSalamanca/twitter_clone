import {React, Component} from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class Signup extends Component{
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: '',
            birthdate: new Date(),
        }

        console.log(this.state);
    }


    componentDidMount(){
        this.setState({
            
        })
    }

    onChangeFirstName(e){
        this.setState({
            first_name: e.target.value
        });
    };

    onChangeLastName(e){
        this.setState({
            last_name: e.target.value
        });
    };

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    };

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    };

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    };

    onChangeDate(date){
        this.setState({
            birthdate: date
        });
    };

    onSubmit(e){
        e.preventDefault();
        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            date: this.state.date
        }

        console.log(user);

        axios.post("http://localhost:3000/Signup/", user)
        .then(res => console.log(res.data));
        //window.location = '/';
    }
    render(){
        return(
            <div className="home">
                <form className="form" onSubmit={this.onSubmit} method="POST">
                    <fieldset>
                        <label>First Name: <input type='text' name="first_name" required onChange={this.onChangeFirstName}/></label><br/>
                        <label>Last Name: <input type='text' name="last_name" required onChange={this.onChangeLastName}/></label><br/>
                        <label>Username: <input type='text' name="username" required onChange={this.onChangeUsername}/></label><br/>
                        <label>Password: <input type='password' name="password" required onChange={this.onChangePassword}/></label><br/>
                        <label>Email: <input type='email' name="email" required onChange={this.onChangeEmail}/></label><br/>
                        <label>Date of Birth: </label><DatePicker selected={this.state.birthdate} onChange={this.onChangeDate} /><br/>
                        <input type="submit" value="Sign up" />
                    </fieldset>
                </form>
            </div>
        );
    };
}