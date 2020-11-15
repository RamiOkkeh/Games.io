import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');
const $ = require('jquery');
class SignInForm extends Component {
     constructor(props) {
         super(props);
         this.state = {
             username: null,
             password: null
         }
     }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#signIn-form').serializeArray();
        let options = {
            url: `http://localhost:4000/user/login`,
            method: 'post',
            data: { username: input[0].value, password: input[1].value }
        }

        axios(options)
            .then((results) => {
                console.log(results);
            })

            .catch((err) => {
                console.log("error here ====>", err);
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    render() {
        return (
            <div id="signIn" className="center">
                <form id="signIn-form" onSubmit={this.handleSubmit}>
                    <h1>Sign In</h1>
                    <br/>
                    <div className="column">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id="username" name="username" onChange={this.handleChange} /><br/>
                    <label htmlFor="Password">Password:</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <button>Sign In</button><br/>
                </form>
                    <Link to="/signup">
                    <button>Sign Up</button><br/>
                    </Link>
            </div>
        )
    }
};

export default SignInForm;