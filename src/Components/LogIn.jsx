import React, { Component } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';

class LogIn extends Component {
    state = {
        username: '',
        password: '',
        errors: {}
    }


    validateProperty = ({ name, value }) => {
        if (name === 'username') {
            if (value.trim() === "") return "username is required";
        }
        if (name === 'password') {
            if (value.trim() === "") return "password is required";


        }
    }

    handleChange = (e) => {
        const errors = { ...this.state.errors };
        console.log("currenttarget", e.currentTarget);
        const errorMessage = this.validateProperty(e.currentTarget);
        if (errorMessage)
            errors[e.currentTarget.name] = errorMessage;
        else delete errors[e.currentTarget.name];
        this.setState({ [e.currentTarget.name]: e.currentTarget.value, errors });
    }

    validate = () => {
        const errors = {};
        const { username, password } = this.state;
        if (username.trim() === "")
            errors.username = 'username is required';
        if (password.trim() === "")
            errors.password = 'password is required';
        return Object.keys(errors).length === 0 ? null : errors;
    }

    onSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors)
            return;

        var loginModel = {

            email: this.state.username,
            passWord: this.state.password
        }
        $.ajax({
            url: "https://localhost:44372/api/user/authenticate",
            type: "POST",
            data: JSON.stringify(loginModel),
            contentType: 'application/json',
            dataType: 'json',
            success: function (response) {
                console.log("success", response.token);
                Cookies.set('talentAuthToken', response.token)
            }.bind(this),

        })
    }

    render() {
        const { errors } = this.state;
        console.log("render", errors);
        return (
            <div className="container">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" className="form-control" name="username" onChange={this.handleChange} />
                        {errors.username && <div className="alert alert-danger"> {errors.username} </div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="form-control" name="password" type="password" onChange={this.handleChange} />
                        {errors.password && <div className="alert alert-danger"> {errors.password} </div>}
                    </div>
                    <button disabled={this.validate()} type="submit" className="btn btn-primary" onClick={this.onSubmit} > Submit</button>
                </form>
            </div>)
    }
}

export default LogIn;
