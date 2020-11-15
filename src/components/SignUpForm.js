import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');
const $ = require('jquery');
class SignUpForm extends Component {
     constructor(props) {
         super(props);
         this.state = {
             username: null,
             password: null,
             confirmpassword: null
         }
     }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#signup-form').serializeArray();
        if (input[1].value === input[2].value) {
            let options = {
                url: `http://localhost:4000/user/signup`,
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
        else {
            alert("Password don't match");
        }
    }

    render() {
        return (
            <div id="signup" className="center">
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <br/>
                    <div className="column">
                    <label htmlFor="newusername">User Name:</label>
                    <input type="text" id="newusername" name="newusername" onChange={this.handleChange} /><br/>
                    <label htmlFor="newPassword">Password:</label>
                    <input type="password" id="newPassword" name="newPassword" onChange={this.handleChange} /><br/>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <button>Sign Up</button><br/>
                </form>
                    <br/>
                    <Link to="/signin">
                    <button>Sign In</button><br/>
                    </Link>
            </div>
        )
    }
};

export default SignUpForm;